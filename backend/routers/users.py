# app/routers/users.py
from fastapi import APIRouter, Depends
from ..dependencies import get_db
from ..controllers.user_controller import UserController

router = APIRouter()


@router.get("/{user_id}")
def get_user(user_id: int, db=Depends(get_db)):
    controller = UserController(db)
    return controller.get_user_by_id(user_id)
