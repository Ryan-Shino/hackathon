import React, { useState } from 'react';
import { Dumbbell, Library, TreePine, Users, Utensils, User, Trophy, Home, BarChart2, Zap, Brain, Heart } from 'lucide-react';
import StatsPage from './StatsPage';
import LeaderboardPage from './LeaderboardPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import mainBg from './assets/stardew-valley-main.avif';

const App = () => {
  const [authState, setAuthState] = useState('login');
  const [currentPage, setCurrentPage] = useState('home');

  const stats = {
    level: 5,
    strength: 10,
    intelligence: 12,
    stamina: 8,
    charisma: 15,
  };


  const locations = [
    { name: 'Exercise', icon: <Dumbbell size={18} /> },
    { name: 'Learning', icon: <Library size={18} /> },
    { name: 'Nature', icon: <TreePine size={18} /> },
    { name: 'Social', icon: <Users size={18} /> },
  ];

  if (authState === 'login') {
    return <LoginPage onLogin={() => setAuthState('authenticated')} onNavigateRegister={() => setAuthState('register')} />;
  }

  if (authState === 'register') {
    return <RegisterPage onRegister={() => setAuthState('authenticated')} onNavigateLogin={() => setAuthState('login')} />;
  }

  const renderContent = () => {
    if (currentPage === 'stats') return <StatsPage />;
    if (currentPage === 'leaderboard') return <LeaderboardPage />;

    return (
      <div className="flex w-full h-full relative items-end">

        {/* Bottom Dashboard Box - Full width, stacked vertically */}
        <div className="pixel-scroll p-5 z-30 flex flex-col h-full w-full border-t-[4px] absolute bottom-0 left-0">

          {/* Top Section: Character Header */}
          <div className="flex items-center gap-4 border-b-2 border-[#5d4037]/40 pb-4 mb-4">
            <div className="w-[50px] h-[50px] bg-[#e2c792] pixel-box flex justify-center items-center text-[#3e2723] shrink-0">
              <User size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="pixel-font text-[12px] text-[#3e2723] tracking-widest">PLAYER_1</span>
              <span className="pixel-font text-[9px] text-[#5d4037]">LVL {stats.level}</span>
            </div>
          </div>

          {/* Middle Section: Location Icons Grid (Now underneath the character) */}
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start border-b-2 border-[#5d4037]/40 pb-5 mb-4">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="bg-[#e2c792] pixel-box flex items-center gap-2 px-2.5 py-1.5 cursor-pointer text-[#3e2723] hover:bg-[#f4d3a2] active:translate-y-1 transition-all"
                title={loc.name}
              >
                {/* Scale modifier removed to shrink the icon back to its base size */}
                <div className="shrink-0">{loc.icon}</div>
                <span className="pixel-font text-[7px] font-bold tracking-wider pt-0.5">
                  {loc.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
          {/* Bottom Section: Stat Rows - Redesigned into a prominent 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 w-full">

            {/* STR Stat Card */}
            <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
              <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]">
                <Zap size={18} className="text-red-600 drop-shadow-sm" /> STR
              </div>
              <span className="pixel-font text-[12px] text-[#3e2723]">{stats.strength}</span>
            </div>

            {/* INT Stat Card */}
            <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
              <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]">
                <Brain size={18} className="text-blue-600 drop-shadow-sm" /> INT
              </div>
              <span className="pixel-font text-[12px] text-[#3e2723]">{stats.intelligence}</span>
            </div>

            {/* STA Stat Card */}
            <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
              <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]">
                <Heart size={18} className="text-green-600 drop-shadow-sm" /> STA
              </div>
              <span className="pixel-font text-[12px] text-[#3e2723]">{stats.stamina}</span>
            </div>

            {/* CHA Stat Card */}
            <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
              <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]">
                <Users size={18} className="text-amber-600 drop-shadow-sm" /> CHA
              </div>
              <span className="pixel-font text-[12px] text-[#3e2723]">{stats.charisma}</span>
            </div>

          </div>

        </div>
      </div>
    );
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
            -3px 0 0 0 white,
            3px 0 0 0 white,
            0 -3px 0 0 white,
            0 3px 0 0 white;
        }

        .pixel-scroll {
          background-color: #e2c792;
          box-shadow: 
            -4px 0 0 0 #5d4037,
            4px 0 0 0 #5d4037,
            0 -4px 0 0 #5d4037,
            0 4px 0 0 #5d4037,
            inset -4px -4px 0 0 #c2a36b,
            inset 4px 4px 0 0 #f4d3a2;
        }

        .pixel-nav-vertical {
          box-shadow: -4px 0 0 0 #271c19;
        }
      `}</style>

      {/* Main Container - Adjusted flex properties to push content to the bottom left */}
      <div
        className="flex justify-start items-end h-screen w-full bg-cover bg-center pixel-bg relative overflow-hidden p-4 sm:p-8"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="flex flex-row w-full max-w-[350px] h-[90dvh] sm:h-[400px] bg-black/20 sm:border-4 sm:rounded-none overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)]">

          <div className="flex-1 overflow-y-auto scrollbar-hide z-10 relative">
            {renderContent()}
          </div>

          <nav className="flex-none w-[60px] h-full bg-[#3e2723] pixel-nav-vertical flex flex-col justify-center gap-10 items-center z-50">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex flex-col items-center justify-center w-full bg-transparent border-none cursor-pointer transition-colors ${currentPage === 'home' ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}
            >
              <Home size={24} />
              <span className="pixel-font text-[6px] mt-2 tracking-wider">MAP</span>
            </button>

            <button
              onClick={() => setCurrentPage('stats')}
              className={`flex flex-col items-center justify-center w-full bg-transparent border-none cursor-pointer transition-colors ${currentPage === 'stats' ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}
            >
              <BarChart2 size={24} />
              <span className="pixel-font text-[6px] mt-2 tracking-wider">STATS</span>
            </button>

            <button
              onClick={() => setCurrentPage('leaderboard')}
              className={`flex flex-col items-center justify-center w-full bg-transparent border-none cursor-pointer transition-colors ${currentPage === 'leaderboard' ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}
            >
              <Trophy size={24} />
              <span className="pixel-font text-[6px] mt-2 tracking-wider">RANKS</span>
            </button>
          </nav>

        </div>
      </div>
    </>
  );
};

export default App;
