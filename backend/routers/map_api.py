from fastapi import APIRouter

from ..controllers.map_controller import decode_coords

router = APIRouter()


@router.get("")
def get_location(long: float, lat: float):
    # retrieve the string mapped to the provided coordinates
    print(f"Received coordinates: Long: {long}, Lat: {lat}")
    mapped_location = decode_coords(long, lat)

    # return it to the frontend in json format
    print(f"Mapbox determined location as: {mapped_location}")
    return {"location": mapped_location}
