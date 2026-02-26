import { useState , useEffect} from 'react'
import './index.css'

function App() {
  const [msg, setMsg] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:8000/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950">
        <h1 className="text-4xl font-bold text-white">{msg}</h1>
    </div>
  )
}

export default App
