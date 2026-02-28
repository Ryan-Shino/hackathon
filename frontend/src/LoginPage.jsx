import React, { useState } from 'react';
import stardewBg from './assets/stardew-valley-login.jpg';
import { loginUser } from './api/auth';

const LoginPage = ({ onLogin, onNavigateRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    const result = await loginUser(username, password);

    if (result.error) {
      alert(result.error);
      return;
    }

    // result now contains: { username, level, strength, etc. }
    localStorage.setItem("username", result.username);

    // Pass the actual user data into the onLogin function
    onLogin(result);
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

          <div className="bg-[#1a1c29]/80 backdrop-blur-sm p-8 w-[85%] pixel-box flex flex-col items-center z-10">

            <h1 className="pixel-font text-white text-xl mb-8 text-center leading-relaxed tracking-widest text-shadow-sm shadow-black">
              WANDER<br />QUEST
            </h1>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[8px] text-white/80 uppercase tracking-widest">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[10px] p-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="PLAYER_1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="pixel-font text-[8px] text-white/80 uppercase tracking-widest">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-2 border-white/50 text-white pixel-font text-[10px] p-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-[#4ade80] text-black pixel-font text-[10px] p-4 border-b-[4px] border-[#166534] hover:bg-[#22c55e] pixel-btn transition-colors cursor-pointer"
              >
                START GAME
              </button>

            </form>

            <p
              onClick={onNavigateRegister}
              className="pixel-font text-[7px] text-white/60 mt-6 cursor-pointer hover:text-white transition-colors text-center leading-loose"
            >
              CREATE NEW SAVE FILE &gt;
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
