import { useState , useEffect} from 'react'
import './index.css'

function App() {
  const [bgcolour, setBgcolour] = useState('#1e293b')
  const [input, setInput] = useState("")

  const changeTheme = async () => {
    try {
      const response = await fetch(`http://localhost:8000/theme?style=${input}`)
      const data = await response.json()
      setBgcolour(data.colour)
    } catch (error) {
      console.error("Failed to catch theme: ", error)
    }
  }


  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: bgcolour }}
    >
      <div className='h-[60vh] w-[60vw] bg-neutral-900 rounded-2xl flex flex-col items-center justify-center'>
        <h1 className="text-2xl font-semibold pb-5 text-neutral-500">Switch Theme:</h1>
        <p className='text-xl opacity-50 pb-10'>Try forest, ocean, lava, cyber or sunset</p>
        <div className='flex flex-col items-center justify-center gap-5'>
          <input 
            className='bg-mist-700 rounded-md text-xl p-3'
            type='text' 
            placeholder='Type a theme' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            />
          <button
            onClick={changeTheme}
            className='bg-zinc-800 rounded-md p-3'>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
