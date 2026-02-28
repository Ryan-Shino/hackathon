from fastapi import APIRouter, Depends, HTTPException

from ..controllers.auth_controller import AuthController
from ..dependencies import get_db
from ..models.user_models import UserCreate, UserLogin

router = APIRouter()


@router.post("/register")
def register(user: UserCreate, db=Depends(get_db)):
    controller = AuthController(db)
    success = controller.register_user(user.username, user.password)
    print("registering user")

    if not success:
        raise HTTPException(status_code=400, detail="Username already taken")

    return {"message": "User created"}


@router.post("/login")
def login(user: UserLogin, db=Depends(get_db)):
    controller = AuthController(db)
    result = controller.login_user(user.username, user.password)

    if not result:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful"}


@router.get("/debug/users")
def get_all_users(db=Depends(get_db)):
    print("fetching all users for debugging")
    cursor = db.cursor()
    cursor.execute("SELECT username, level FROM users")
    return cursor.fetchall()
