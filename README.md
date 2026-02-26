# Setup

1. Create folder and subfolders frontend and backend

### Front end

1. In front end (cd frontend) run (npm create vite@latest . -- -- template react)
2. Install tailwind (npm install tailwindcss @tailwindcss/vite) 
3. npm install

1. In vite config file add tailwind plugin 

```java
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

1. In index.css, delete everything and import tailwind(@import “tailwindcsss”;)

### Backend

1. cd backend
2. Create venv (python -m venv venv)
3. Activate (source venv/bin/activate)
4. Install fastapi and uvicorn (pip install fastapi uvicorn)

### Combining

We need to allow them to talk to each other:

In main.py

```java
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
def read_root():
    return {"message": "Hello from the Python backend!"}
```

In App.jsx

```java
import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:8000/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-4xl font-bold text-white">{msg}</h1>
    </div>
  )
}

export default App
```

### Running it

Backend terminal: uvicorn main:app -- reload

Frontend terminal: npm run dev

### Gitignore
```java
# Ignore React dependencies
frontend/node_modules/
frontend/dist/

# Ignore Python dependencies
backend/venv/
backend/__pycache__/
.env
```
