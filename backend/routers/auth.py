from fastapi import APIRouter, Depends

from ..controllers.auth_controller import AuthController
from ..dependencies import get_db
from ..models.user_models import UserCreate, UserLogin

router = APIRouter()


@router.post("/register")
def register(user: UserCreate, db=Depends(get_db)):
    controller = AuthController(db)
    controller.register_user(user.username, user.password)
    return {"message": "User created"}


@router.post("/login")
def login(user: UserLogin, db=Depends(get_db)):
    controller = AuthController(db)
    result = controller.login_user(user.username, user.password)

    if not result:
        return {"error": "Invalid credentials"}

    return {"message": "Login successful"}
