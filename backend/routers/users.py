from fastapi import APIRouter, Depends
from ..dependencies import get_db
from ..controllers.user_controller import UserController

router = APIRouter()


@router.get("/{username}")
def get_user(username: str, db=Depends(get_db)):
    controller = UserController(db)
    return controller.get_user(username)
