import React, { useState } from 'react';
import { Dumbbell, Library, TreePine, Users, Utensils, User, Trophy, Home, BarChart2, Zap, Brain, Heart, X, Sparkle } from 'lucide-react';
import StatsPage from './StatsPage';
import LeaderboardPage from './LeaderboardPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ClassSelectionPage from './ClassSelectionPage';
import mainBg from './assets/stardew-valley-main.avif';

// Import sprite assets
import monkSprite from './assets/sprites/monk.png';
import merchantSprite from './assets/sprites/merchant.png';
import knightSprite from './assets/sprites/knight.png';
import alchemistSprite from './assets/sprites/alchemist.png';

const App = () => {
  const [authState, setAuthState] = useState('login'); 
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerClass, setPlayerClass] = useState(null); 

  const stats = {
    level: 5,
    strength: 10,
    intelligence: 12,
    wellbeing: 8,
    charisma: 15,
  };

  const locations = [
    { name: 'Exercise', icon: <Dumbbell size={18} /> },
    { name: 'Learning', icon: <Library size={18} /> },
    { name: 'Nature', icon: <TreePine size={18} /> },
    { name: 'Social', icon: <Users size={18} /> },
  ];

  // Map the chosen class to the correct imported sprite
  const classSprites = {
    monk: monkSprite,
    merchant: merchantSprite,
    knight: knightSprite,
    alchemist: alchemistSprite,
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsModalOpen(true);
  };
  
  if (authState === 'login') {
    return <LoginPage onLogin={() => setAuthState('authenticated')} onNavigateRegister={() => setAuthState('register')} />;
  }

  if (authState === 'register') {
    return <RegisterPage onRegister={() => setAuthState('class_selection')} onNavigateLogin={() => setAuthState('login')} />;
  }

  if (authState === 'class_selection') {
    return (
      <ClassSelectionPage 
        onSelectClass={(selectedClass) => {
          setPlayerClass(selectedClass);
          setAuthState('authenticated');
        }} 
      />
    );
  }

  const renderModalContent = () => {
    if (currentPage === 'stats') return <StatsPage />;
    if (currentPage === 'leaderboard') return <LeaderboardPage />;
    return null;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-font { font-family: 'Press Start 2P', cursive; }
        .pixel-bg { image-rendering: pixelated; }
        .pixel-box {
          box-shadow: -3px 0 0 0 white, 3px 0 0 0 white, 0 -3px 0 0 white, 0 3px 0 0 white;
        }
        .pixel-scroll {
          background-color: #e2c792;
          box-shadow: 
            -4px 0 0 0 #5d4037, 4px 0 0 0 #5d4037, 0 -4px 0 0 #5d4037, 0 4px 0 0 #5d4037,
            inset -4px -4px 0 0 #c2a36b, inset 4px 4px 0 0 #f4d3a2;
        }
        .pixel-nav-right {
            box-shadow: -4px 0 0 0 #271c19;
            border-left: 4px solid #5d4037;
        }
        .modal-overlay {
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
        }
        /* Optional animation for the sprite to make it feel alive */
        @keyframes idle-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .sprite-idle {
          animation: idle-bob 2s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="h-screen w-full bg-cover bg-center pixel-bg relative overflow-hidden"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        
        {/* Centred Character Sprite */}
        {playerClass && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <img 
              src={classSprites[playerClass]} 
              alt={`${playerClass} character`} 
              className="w-32 h-32 pixel-bg object-contain sprite-idle drop-shadow-md"
            />
          </div>
        )}

        {/* Main Dashboard (Bottom Left) */}
        <div className="absolute bottom-8 left-8 w-full max-w-[350px] z-10">
          <div className="pixel-scroll p-5 flex flex-col w-full border-t-[4px]">
            <div className="flex items-center gap-4 border-b-2 border-[#5d4037]/40 pb-4 mb-4">
              <div className="w-[50px] h-[50px] bg-[#e2c792] pixel-box flex justify-center items-center text-[#3e2723] shrink-0">
                <User size={30} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="pixel-font text-[12px] text-[#3e2723] tracking-widest">PLAYER_1</span>
                <span className="pixel-font text-[9px] text-[#5d4037]">LVL {stats.level} {playerClass && `• ${playerClass.toUpperCase()}`}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start border-b-2 border-[#5d4037]/40 pb-5 mb-4">
              {locations.map((loc, index) => (
                <div key={index} className="bg-[#e2c792] pixel-box flex items-center gap-2 px-2.5 py-1.5 cursor-pointer text-[#3e2723] hover:bg-[#f4d3a2]">
                  <div className="shrink-0">{loc.icon}</div>
                  <span className="pixel-font text-[7px] font-bold tracking-wider pt-0.5">{loc.name.toUpperCase()}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
                <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]"><Zap size={18} className="text-yellow-600"/> STR</div>
                <span className="pixel-font text-[12px] text-[#3e2723]">{stats.strength}</span>
              </div>
              <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
                <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]"><Brain size={18} className="text-blue-600"/> INT</div>
                <span className="pixel-font text-[12px] text-[#3e2723]">{stats.intelligence}</span>
              </div>
              <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
                <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]"><Heart size={18} className="text-red-600"/> WEL</div>
                <span className="pixel-font text-[12px] text-[#3e2723]">{stats.wellbeing}</span>
              </div>
              <div className="flex items-center justify-between bg-[#d4b57e] pixel-box p-3">
                <div className="flex items-center gap-2 pixel-font text-[9px] text-[#3e2723]"><Sparkle size={18} className="text-green-600"/> CHA</div>
                <span className="pixel-font text-[12px] text-[#3e2723]">{stats.charisma}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Right Navigation */}
        <nav className="absolute right-0 top-0 h-full w-[70px] bg-[#3e2723] pixel-nav-right flex flex-col justify-center gap-10 items-center z-50">
          <button onClick={() => setIsModalOpen(false)} className={`flex flex-col items-center justify-center w-full transition-colors ${!isModalOpen ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}>
            <Home size={24} />
            <span className="pixel-font text-[6px] mt-2 tracking-wider">MAP</span>
          </button>
          
          <button onClick={() => handleNavClick('stats')} className={`flex flex-col items-center justify-center w-full transition-colors ${currentPage === 'stats' && isModalOpen ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}>
            <BarChart2 size={24} />
            <span className="pixel-font text-[6px] mt-2 tracking-wider">STATS</span>
          </button>
          
          <button onClick={() => handleNavClick('leaderboard')} className={`flex flex-col items-center justify-center w-full transition-colors ${currentPage === 'leaderboard' && isModalOpen ? 'text-[#f4d3a2]' : 'text-[#a67c52] hover:text-[#e2c792]'}`}>
            <Trophy size={24} />
            <span className="pixel-font text-[6px] mt-2 tracking-wider">RANKS</span>
          </button>
        </nav>

        {/* Centred Modal Pop-up */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 modal-overlay">
            <div className="relative w-full max-w-2xl max-h-[80vh] pixel-scroll p-8 overflow-y-auto">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#3e2723] hover:scale-110 transition-transform"
              >
                <X size={32} />
              </button>
              <div className="mt-4">
                {renderModalContent()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;