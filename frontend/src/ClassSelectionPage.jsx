import React, { useState } from 'react';
import { TreePine, Users, Dumbbell, Library } from 'lucide-react';
import stardewBg from './assets/stardew-valley-login.jpg';

// Import sprite assets
import monkSprite from './assets/sprites/monk.png';
import merchantSprite from './assets/sprites/merchant.png';
import knightSprite from './assets/sprites/knight.png';
import alchemistSprite from './assets/sprites/alchemist.png';

const ClassSelectionPage = ({ onSelectClass }) => {
  const [selectedId, setSelectedId] = useState(null);

  const classes = [
    { 
      id: 'monk', 
      name: 'Monk', 
      icon: <TreePine size={28} className="text-emerald-700" />, 
      sprite: monkSprite,
      perk: 'Levels up 1.5x faster in Nature places.' 
    },
    { 
      id: 'merchant', 
      name: 'Merchant', 
      icon: <Users size={28} className="text-blue-700" />, 
      sprite: merchantSprite,
      perk: 'Levels up 1.5x faster in Social places.' 
    },
    { 
      id: 'knight', 
      name: 'Knight', 
      icon: <Dumbbell size={28} className="text-red-700" />, 
      sprite: knightSprite,
      perk: 'Levels up 1.5x faster in Exercise places.' 
    },
    { 
      id: 'alchemist', 
      name: 'Alchemist', 
      icon: <Library size={28} className="text-purple-700" />, 
      sprite: alchemistSprite,
      perk: 'Levels up 1.5x faster in Learning places.' 
    }
  ];

  const selectedClass = classes.find(c => c.id === selectedId);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-font { font-family: 'Press Start 2P', cursive; }
        .pixel-bg { image-rendering: pixelated; }

        /* --- NEW CHUNKY PIXEL STYLES --- */
        
        /* The main heavy window frame */
        .pixel-window {
          background-color: #e2c792;
          border: 8px solid #5d4037;
          box-shadow: 
            inset -8px -8px 0 0 #c2a36b,
            inset 8px 8px 0 0 #f4d3a2,
            0 12px 0 0 #271c19; /* Deep drop shadow */
        }
        
        /* The interactive class cards */
        .pixel-card {
          background-color: #d4b57e;
          border: 4px solid #5d4037;
          box-shadow: 
            inset -4px -4px 0 0 #c2a36b,
            inset 4px 4px 0 0 #e2c792,
            0 6px 0 0 #271c19; /* Card depth */
          transition: all 0.1s;
        }
        
        .pixel-card:hover {
          transform: translateY(4px); /* Push down */
          box-shadow: 
            inset -4px -4px 0 0 #c2a36b,
            inset 4px 4px 0 0 #e2c792,
            0 2px 0 0 #271c19; /* Reduced depth */
          filter: brightness(1.1);
        }
        
        .pixel-card.selected {
          background-color: #f4d3a2;
          border-color: #271c19;
          box-shadow: 
            inset 4px 4px 0 0 #e2c792, 
            inset -4px -4px 0 0 #c2a36b; /* Depressed state */
          transform: translateY(6px);
        }

        /* The deep inset alcove for the sprite */
        .pixel-preview-box {
          background-color: #d4b57e;
          border: 8px solid #5d4037;
          box-shadow:
             inset 8px 8px 0 0 #271c19, /* Deep top-left inner shadow */
             inset -8px -8px 0 0 #e2c792; /* Highlight bottom-right */
        }

        /* Chunky icon border */
        .pixel-icon-box {
            border: 4px solid #5d4037;
            background-color: #e2c792;
        }
        
        /* The big green confirm button */
        .pixel-btn {
          background-color: #4ade80;
          border: 4px solid #166534;
          box-shadow: 
            inset 4px 4px 0 0 #86efac, 
            inset -4px -4px 0 0 #15803d, 
            0 8px 0 0 #052e16;
          color: black;
        }
        
        .pixel-btn:active {
          transform: translateY(8px);
          box-shadow: 
             inset 4px 4px 0 0 #86efac, 
             inset -4px -4px 0 0 #15803d;
        }

        .pixel-btn:disabled {
            background-color: #9ca3af;
            border-color: #4b5563;
            color: #374151;
            box-shadow: none;
            cursor: not-allowed;
        }

        @keyframes idle-bob-giant {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); } /* Larger bob for larger sprite */
        }
        .sprite-idle-giant {
          animation: idle-bob-giant 2s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="flex justify-center items-center h-screen w-full bg-cover bg-center pixel-bg relative p-4"
        style={{ backgroundImage: `url(${stardewBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

        {/* Main Container - Increased max width for larger elements */}
        <div className="relative z-10 w-full max-w-5xl p-8 md:p-12 pixel-window flex flex-col items-center text-[#3e2723]">
          
          <h1 className="pixel-font text-2xl md:text-3xl mb-4 text-center text-[#271c19] drop-shadow-md tracking-widest">
            CHOOSE PATH
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 w-full mb-8 mt-4 items-stretch">
            
            {/* Left Column: GIANT Character Preview */}
            {/* Increased width to md:w-1/2 to handle the larger sprite */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-start gap-6">
              {/* The container is bigger, and the image fills it */}
              <div className="pixel-preview-box w-full aspect-square flex flex-col items-center justify-center relative overflow-hidden p-8">
                {selectedClass ? (
                  <img 
                    src={selectedClass.sprite} 
                    alt={`${selectedClass.name} sprite`} 
                    // INCREASED SIZE: w-full h-full object-contain ensures it fills the box
                    className="w-full h-full pixel-bg object-contain sprite-idle-giant drop-shadow-2xl"
                  />
                ) : (
                  <span className="pixel-font text-8xl text-[#3e2723]/20 animate-pulse">?</span>
                )}
              </div>
              
              <div className="min-h-[80px] flex flex-col items-center justify-center text-center px-4 bg-[#d4b57e]/50 p-4 pixel-icon-box w-full">
                {selectedClass ? (
                  <>
                    <h3 className="pixel-font text-lg text-[#271c19] mb-3 tracking-widest border-b-4 border-[#5d4037] pb-2">{selectedClass.name.toUpperCase()}</h3>
                    <p className="pixel-font text-[10px] text-[#271c19] leading-relaxed">{selectedClass.perk}</p>
                  </>
                ) : (
                  <p className="pixel-font text-xs text-[#5d4037] animate-pulse">Select a class card...</p>
                )}
              </div>
            </div>

            {/* Right Column: Class Selection Grid */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
               <div className="grid grid-cols-1 gap-5">
                {classes.map((cls) => (
                    <div 
                    key={cls.id}
                    onClick={() => setSelectedId(cls.id)}
                    // Changed to flex-row for chunky horizontal cards on desktop
                    className={`pixel-card p-4 flex flex-row items-center cursor-pointer gap-6 ${selectedId === cls.id ? 'selected' : ''}`}
                    >
                    <div className="p-3 shrink-0 pixel-icon-box">
                        {cls.icon}
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="pixel-font text-sm text-[#271c19] tracking-widest mb-2">{cls.name.toUpperCase()}</h2>
                         {/* Perk description visible on cards now for easier reading */}
                        <p className="pixel-font text-[8px] text-[#3e2723] leading-relaxed hidden md:block opacity-80">
                        {cls.perk}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
                 <button 
                    onClick={() => selectedId && onSelectClass(selectedId)}
                    disabled={!selectedId}
                    className="pixel-font text-sm py-6 mt-8 w-full transition-all pixel-btn tracking-wider"
                >
                    BEGIN JOURNEY
                </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ClassSelectionPage;