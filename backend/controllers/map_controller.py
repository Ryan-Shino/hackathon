import os
import requests
from .mapBoxToken import TOKEN

def decode_coords(long: float, lat: float) -> str:
    # Security Note: It is highly recommended to store your Mapbox token in an environment variable 
    # rather than hardcoding it, to prevent accidental exposure of your private key.
    mapbox_token = os.environ.get("MAPBOX_TOKEN", TOKEN)
    
    url = f"https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/tilequery/{long},{lat}.json"

    # Optimisation: The radius parameter is reduced from 5000 to 50. 
    # This offloads the distance filtering to Mapbox, returning a smaller, faster payload.
    params = {
        "radius": 50,
        "layers": "poi_label",
        "limit": 50,
        "access_token": mapbox_token,
    }

    try:
        r = requests.get(url, params=params, timeout=5)
        r.raise_for_status()
        data = r.json()
    except requests.RequestException as e:
        print(f"Error fetching Mapbox data: {e}")
        return "centre"

    class_names = ["food_and_drink", "arts_and_entertainment", "park_like", "sport_and_leisure", "store_like", "education"]
    
    # Values converted to lowercase to match the React frontend's state requirements ('exercise', 'learning', etc.)
    simplified_types = {
        "food_and_drink": "social",
        "sport_and_leisure": "exercise",
        "education": "learning",
        "park_like": "nature",
        "arts_and_entertainment": "social",
        "store_like": "social"
    }

    for feature in data.get("features", []):
        properties = feature.get("properties", {})
        class_name = properties.get("class")
        type_name = properties.get("type")
        
        # Safely extract distance from the nested tilequery dictionary
        distance = properties.get("tilequery", {}).get("distance", float('inf'))

        if class_name in class_names and type_name != "University":
            if distance < 50:
                return simplified_types[class_name]

    # If the loop finishes and nothing within 50 metres matches, return the default location
    return "centre"