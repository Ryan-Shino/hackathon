# Wander Quest
This was our winning submission to the Soton Datascience and WECS hackathon.
It's a gamified way of getting outside and being social, with pixel art inspired by stardew valley.

We used react and tailwind css for the frontend, with a backend in python using FastAPI.

## Setup and Running It Yourself

### Project Setup

For the location categorisation, you must obtain an api key from [https://www.mapbox.com/](mapbox).

Then create a python file in `backend/controllers` called `mapbox_token.py` with your token:

``` backend/controllers/mapbox_token.py
TOKEN = "{Paste your token here}"
```


To set up the backend:
1. `cd backend`
2. `uv sync`

To set up the frontend:
1. `cd frontend`
2. `npm install`

### Running
You need 2 terminals, one for the fastapi server and one for the frontend.

Backend terminal (from project root directory):

```uv run --project backend uvicorn backend.main:app --reload```

Frontend terminal (from `frontend` directory):

```npm run dev```

Go to [localhost port 5173](http://localhost:5173/) on a browser
