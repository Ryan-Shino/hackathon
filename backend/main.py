from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import users

app = FastAPI()

# Allow your React app port (Vite uses 5173 by default)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, prefix="/users")
app.include_router(users.router, prefix="/auth")
