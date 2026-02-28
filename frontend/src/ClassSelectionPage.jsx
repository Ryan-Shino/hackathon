// File 1: ClassSelectionPage.jsx
import React, { useState } from 'react';
import { TreePine, Users, Dumbbell, Library } from 'lucide-react';
import stardewBg from './assets/stardew-valley-login.jpg';

const ClassSelectionPage = ({ onSelectClass }) => {
  const [selected, setSelected] = useState(null);

  const classes = [
    { 
      id: 'monk', 
      name: 'Monk', 
      icon: <TreePine size={28} className="text-emerald-700" />, 
      perk: 'Levels up 1.5x faster in Nature places.' 
    },
    { 
      id: 'merchant', 
      name: 'Merchant', 
      icon: <Users size={28} className="text-blue-700" />, 
      perk: 'Levels up 1.5x faster in Social places.' 
    },
    { 
      id: 'knight', 
      name: 'Knight', 
      icon: <Dumbbell size={28} className="text-red-700" />, 
      perk: 'Levels up 1.5x faster in Exercise places.' 
    },
    { 
      id: 'alchemist', 
      name: 'Alchemist', 
      icon: <Library size={28} className="text-purple-700" />, 
      perk: 'Levels up 1.5x faster in Learning places.' 
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .pixel-font { font-family: 'Press Start 2P', cursive; }
        .pixel-bg { image-rendering: pixelated; }
        
        /* The main parchment/scroll design */
        .pixel-scroll {
          background-color: #e2c792;
          box-shadow: 
            -4px 0 0 0 #5d4037, 4px 0 0 0 #5d4037, 0 -4px 0 0 #5d4037, 0 4px 0 0 #5d4037,
            inset -4px -4px 0 0 #c2a36b, inset 4px 4px 0 0 #f4d3a2;
        }
        
        /* Individual class cards */
        .pixel-card {
          box-shadow: -2px 0 0 0 #5d4037, 2px 0 0 0 #5d4037, 0 -2px 0 0 #5d4037, 0 2px 0 0 #5d4037;
          transition: transform 0.1s, filter 0.1s;
        }
        
        .pixel-card:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        
        /* Highlight state for the chosen class */
        .pixel-card.selected {
          background-color: #f4d3a2;
          box-shadow: -2px 0 0 0 #271c19, 2px 0 0 0 #271c19, 0 -2px 0 0 #271c19, 0 2px 0 0 #271c19, 0 0 12px rgba(244, 211, 162, 0.6);
        }
        
        .pixel-btn {
          box-shadow: -2px 0 0 0 #166534, 2px 0 0 0 #166534, 0 -2px 0 0 #166534, 0 2px 0 0 #166534;
        }
        
        .pixel-btn:active {
          transform: translateY(2px);
          box-shadow: none;
        }
      `}</style>

      <div 
        className="flex justify-center items-center h-screen w-full bg-cover bg-center pixel-bg relative"
        style={{ backgroundImage: `url(${stardewBg})` }}
      >
        {/* Dark blurred overlay to keep focus centred on the scroll */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 w-full max-w-3xl p-6 md:p-10 pixel-scroll mx-4 flex flex-col items-center text-[#3e2723]">
          <h1 className="pixel-font text-lg md:text-xl mb-4 text-center text-[#271c19] drop-shadow-sm">
            CHOOSE YOUR CLASS
          </h1>
          <p className="pixel-font text-[8px] md:text-[10px] mb-8 text-center text-[#5d4037] leading-loose max-w-lg">
            Your path shapes your journey. Select a class to gain a permanent experience boost in specific locations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
            {classes.map((cls) => (
              <div 
                key={cls.id}
                onClick={() => setSelected(cls.id)}
                className={`pixel-card bg-[#d4b57e] p-5 flex flex-col items-center text-center cursor-pointer gap-4 ${selected === cls.id ? 'selected' : ''}`}
              >
                <div className="bg-[#e2c792] p-3 box-border border-2 border-[#5d4037]">
                  {cls.icon}
                </div>
                <h2 className="pixel-font text-[12px] text-[#271c19] tracking-widest">{cls.name.toUpperCase()}</h2>
                <p className="pixel-font text-[8px] text-[#3e2723] leading-relaxed">
                  {cls.perk}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => selected && onSelectClass(selected)}
            disabled={!selected}
            className={`pixel-font text-[10px] p-4 border-b-[4px] transition-colors mt-2 ${selected ? 'bg-[#4ade80] text-black border-[#166534] hover:bg-[#22c55e] cursor-pointer pixel-btn' : 'bg-gray-400 text-gray-600 border-gray-500 cursor-not-allowed box-shadow-none'}`}
          >
            CONFIRM SELECTION
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassSelectionPage;