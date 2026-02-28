import requests
def decode_coords(long, lat):
    url = f"https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/tilequery/{long},{lat}.json"
    types = ["park", "gym", "library"]

    params = {
        "radius": 1000000000,
        "layers": "poi_label",
        "limit": 100,
        "access_token": "pk.eyJ1IjoibWkxeG4iLCJhIjoiY21tNjlnM3JqMGV6bTJvcXlkc2ljaGgzaSJ9.Z_WUVz3luhRGJTkCegC2mA",
    }

    r = requests.get(url, params=params, timeout=5)
    r.raise_for_status()
    data = r.json()
    
    filtered = []
    for feature in data.get("features", []):
        className = feature["properties"].get("class")
        distance = feature["properties"].get("distance")
        if className == "food_and_drink":
            filtered.append((className, distance))

        # if types is None or maki_type in types:
        #     filtered.append({
        #         "name": feature["properties"].get("name"),
        #         "type": maki_type,
        #         "class": feature["properties"].get("class"),
        #         "distance": feature["properties"].get("distance"),
        #     })

    return filtered
    
    #pk.eyJ1IjoibWkxeG4iLCJhIjoiY21tNjlnM3JqMGV6bTJvcXlkc2ljaGgzaSJ9.Z_WUVz3luhRGJTkCegC2mA
    #sk.eyJ1IjoibWkxeG4iLCJhIjoiY21tNjl0bjJ6MGI2ZDJxcXkycmg2bHJ3aSJ9.x9jypoSNjEyhvDzSx9iRrg