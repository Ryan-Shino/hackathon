from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    password: str


class UserLogin(BaseModel):
    username: str
    password: str


class UserResponse(BaseModel):
    username: str
    social_stat: float | None = None
    exercise_stat: float | None = None
    learning_stat: float | None = None
    nature_stat: float | None = None
