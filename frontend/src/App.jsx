// File 1: App.jsx
import React, { useState } from 'react';
import { Dumbbell, Library, TreePine, Users, Utensils, User, Trophy } from 'lucide-react';
import StatsPage from './StatsPage';
import LeaderboardPage from './Leaderboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const stats = {
    level: 5,
    strength: 10,
    intelligence: 12,
    stamina: 8,
    charisma: 15,
  };

  const locations = [
    { name: 'Gym', icon: <Dumbbell size={28} />, angle: 270, color: '#ef4444' },
    { name: 'Library', icon: <Library size={28} />, angle: 342, color: '#3b82f6' },
    { name: 'Park', icon: <TreePine size={28} />, angle: 54, color: '#22c55e' },
    { name: 'Social', icon: <Users size={28} />, angle: 126, color: '#eab308' },
    { name: 'Food', icon: <Utensils size={28} />, angle: 198, color: '#f97316' },
  ];

  const radius = 130; 

  if (currentPage === 'stats') {
    return <StatsPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'leaderboard') {
    return <LeaderboardPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-800 text-slate-50 font-sans">
      {/* Added 'relative' here to contain the absolute positioned leaderboard button */}
      <div className="relative flex flex-col items-center w-full max-w-[400px] h-[650px] bg-slate-900 rounded-[20px] py-8 px-5 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
        
        {/* Stats Panel (Clickable) */}
        <div 
          onClick={() => setCurrentPage('stats')}
          className="bg-slate-700 p-4 rounded-xl w-[90%] mb-20 shadow-md cursor-pointer hover:bg-slate-600 transition-colors border border-transparent hover:border-slate-500"
          title="Click to view detailed stats"
        >
          <h2 className="m-0 mb-2.5 text-center text-xl font-bold">Player Stats</h2>
          <div className="flex flex-wrap justify-center gap-3 text-[15px] font-bold">
            <span>Level: {stats.level}</span>
            <span>STR: {stats.strength}</span>
            <span>INT: {stats.intelligence}</span>
            <span>STA: {stats.stamina}</span>
            <span>CHA: {stats.charisma}</span>
          </div>
          <p className="text-center text-xs text-slate-400 mt-3 mb-0">Tap to view full profile &rarr;</p>
        </div>

        {/* Character and Map Area */}
        <div className="relative w-full h-[300px] flex justify-center items-center">
          
          <div className="w-[80px] h-[80px] bg-indigo-500 rounded-full flex justify-center items-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
            <User size={48} color="white" />
          </div>

          {locations.map((loc, index) => {
            const rad = (loc.angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div 
                key={index} 
                className="absolute top-1/2 left-1/2 w-[65px] h-[65px] rounded-full flex flex-col justify-center items-center cursor-pointer text-white shadow-lg border-2 border-white/20 transition-transform hover:scale-110"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  backgroundColor: loc.color,
                }}
                title={loc.name}
              >
                {loc.icon}
                <span className="text-[11px] mt-0.5 font-bold">{loc.name}</span>
              </div>
            );
          })}
        </div>

        {/* Floating Action Button for Leaderboard */}
        <button 
          onClick={() => setCurrentPage('leaderboard')}
          className="absolute bottom-6 right-6 bg-yellow-500 p-3.5 rounded-full text-slate-900 shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:bg-yellow-400 transition-transform hover:scale-110 z-20 border-none cursor-pointer flex justify-center items-center"
          title="View Leaderboard"
        >
          <Trophy size={26} className="fill-slate-900" />
        </button>

      </div>
    </div>
  );
};

export default App;