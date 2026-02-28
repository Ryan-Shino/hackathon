from fastapi import APIRouter, Depends
from ..controllers.map_controller import decode_coords

router = APIRouter()

@router.get("/location")
def get_location(long: float, lat: float):
    return decode_coords(long, lat)