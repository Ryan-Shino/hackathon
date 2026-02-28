from fastapi import APIRouter, Depends
from ..controllers.map_controller import decode_coords

router = APIRouter()

@router.get("")
def get_location(long: float, lat: float):
    # Retrieve the string mapped to the provided coordinates
    print(f"Received coordinates: Long: {long}, Lat: {lat}") # <-- ADD THIS
    mapped_location = decode_coords(long, lat)
    
    # Return it to the frontend in JSON format
    print(f"Mapbox determined location as: {mapped_location}") # <-- ADD THIS
    return {"location": mapped_location}