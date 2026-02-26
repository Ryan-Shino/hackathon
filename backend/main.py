from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your React app port (Vite uses 5173 by default)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/theme')
def get_theme(style: str = 'default'):
    themes = {
        "forest": "#1b4332",
        "ocean": "#0077b6",
        "lava": "#9b2226",
        "cyber": "#0f172a",
        "sunset": "#fb8500"
    }
    selected_colour = themes.get(style.lower(), "#1e293b")
    return {"theme": style, "colour": selected_colour}