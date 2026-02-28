// File 1: RegisterPage.jsx
import React, { useState } from 'react';
import stardewBg from './assets/stardew-valley-login.jpg';

const RegisterPage = ({ onRegister, onNavigateLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation to ensure passwords match before registering
    if (username && password && password === confirmPassword) {
      onRegister();
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-font { font-family: 'Press Start 2P', cursive; }
        
        .pixel-bg {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .pixel-box {
          box-shadow: 
            -4px 0 0 0 white,
            4px 0 0 0 white,
            0 -4px 0 0 white,
            0 4px 0 0 white;
        }
        
        .pixel-btn:active {
          transform: translateY(4px);
          box-shadow: none;
        }
      `}</style>

      <div 
        className="flex justify-center items-center h-screen w-full bg-cover bg-center pixel-bg relative"
        style={{ backgroundImage: `url(${stardewBg})` }}
      >
        <div className="relative flex flex-col justify-center items-center w-full max-w-[400px] h-[100dvh] sm:h-[650px] sm:border-4 sm:border-white sm:rounded-none overflow-hidden">
          
          <div className="bg-[#1a1c29]/90 backdrop-blur-md p-6 w-[85%] pixel-box flex flex-col items-center z-10 max-h-[90%] overflow-y-auto scrollbar-hide">
            
            <h1 className="pixel-font text-white text-lg mb-6 text-center leading-relaxed tracking-widest text-shadow-sm shadow-black">
              NEW SAVE
            </h1>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              
              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[7px] text-white/80 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[9px] p-2.5 focus:outline-none focus:border-white transition-colors"
                  placeholder="player@email.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[7px] text-white/80 uppercase tracking-widest">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[9px] p-2.5 focus:outline-none focus:border-white transition-colors"
                  placeholder="PLAYER_1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[7px] text-white/80 uppercase tracking-widest">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[9px] p-2.5 focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[7px] text-white/80 uppercase tracking-widest">Confirm Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[9px] p-2.5 focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button 
                type="submit"
                className="mt-2 bg-[#4ade80] text-black pixel-font text-[9px] p-3 border-b-[4px] border-[#166534] hover:bg-[#22c55e] pixel-btn transition-colors cursor-pointer"
              >
                CREATE SAVE
              </button>
              
            </form>

            <p 
              onClick={onNavigateLogin}
              className="pixel-font text-[7px] text-white/60 mt-5 cursor-pointer hover:text-white transition-colors text-center leading-loose"
            >
              &lt; LOAD EXISTING SAVE
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;