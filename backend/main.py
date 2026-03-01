from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import auth, map_api, users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include the routers for users, auth, and map api
app.include_router(users.router, prefix="/users")
app.include_router(auth.router, prefix="/auth")
app.include_router(map_api.router, prefix="/location")
