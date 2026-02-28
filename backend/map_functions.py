import requests
def decode_coords(long, lat):
    url = f"https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/tilequery/{long},{lat}.json"

    params = {
        "radius": 5000,
        "layers": "poi_label",
        "limit": 50,
        "access_token": "sk.eyJ1IjoibWkxeG4iLCJhIjoiY21tNjl0bjJ6MGI2ZDJxcXkycmg2bHJ3aSJ9.x9jypoSNjEyhvDzSx9iRrg",
    }

    r = requests.get(url, params=params, timeout=5)
    r.raise_for_status()
    data = r.json()
    classNames = ["food_and_drink", "arts_and_entertainment", "park_like", "sport_and_leisure", "store_like", "education"]
    simplified_types = {
        "food_and_drink": "Social",
        "sport_and_leisure": "Exercise",
        "education": "Learning",
        "park_like": "Nature",
        "arts_and_entertainment": "Social",
        "store_like": "Social"
    }
    for feature in data.get("features", []):
        className = feature["properties"].get("class")
        distance = feature["properties"].get("distance")
        typeName = feature["properties"].get("type")
        distance = feature["properties"]["tilequery"].get("distance")
        if className in classNames and typeName != "University":
            if distance < 50:
                return simplified_types[className]
            else:
                return ""

    
