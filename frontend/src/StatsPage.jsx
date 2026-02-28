// File 2: StatsPage.jsx
import React from 'react';
import { Shield, Star, Zap, Brain, Heart, Users } from 'lucide-react';

const StatsPage = () => {
  const playerProfile = {
    level: 5,
    playerClass: "Socialite",
    title: "Life of the Party"
  };

  const stats = [
    { name: 'Strength', current: 10, nextLevel: 15, icon: <Zap size={18} className="text-white" /> },
    { name: 'Intelligence', current: 12, nextLevel: 20, icon: <Brain size={18} className="text-white" /> },
    { name: 'Stamina', current: 8, nextLevel: 10, icon: <Heart size={18} className="text-white" /> },
    { name: 'Charisma', current: 15, nextLevel: 15, icon: <Users size={18} className="text-white" /> },
  ];

  return (
    <div className="flex flex-col w-full min-h-full p-5 text-white">
      
      {/* Header */}
      <h1 className="text-center text-2xl font-bold mb-6 glow-text tracking-wider uppercase">Profile</h1>

      {/* Identity Card - Reduced borders and shadows */}
      <div className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)] mb-8 flex items-center gap-4 backdrop-blur-sm">
        <div className="w-[60px] h-[60px] bg-white/5 border border-white/20 rounded-full flex justify-center items-center shadow-[0_0_10px_rgba(255,255,255,0.2)] glow-number">
          <Shield size={32} className="text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Star size={16} className="text-white fill-white glow-number" />
            <h2 className="text-lg font-bold m-0 glow-text">Level {playerProfile.level}</h2>
          </div>
          <p className="text-white/80 text-sm font-semibold m-0">{playerProfile.playerClass}</p>
          <p className="text-white/50 text-xs italic m-0">"{playerProfile.title}"</p>
        </div>
      </div>

      {/* Stats Breakdown */}
      <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
        Attribute Progression
      </h3>
      
      <div className="flex flex-col gap-5 pb-6">
        {stats.map((stat, index) => {
          const progressPercentage = Math.min((stat.current / stat.nextLevel) * 100, 100);
          const pointsNeeded = stat.nextLevel - stat.current;
          const isMaxed = pointsNeeded === 0;

          return (
            <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 glow-text">
                  {stat.icon}
                  <span className="font-bold text-white tracking-wide">{stat.name}</span>
                </div>
                <div className="text-sm font-bold glow-number">
                  <span className="text-white">{stat.current}</span>
                  <span className="text-white/40"> / {stat.nextLevel}</span>
                </div>
              </div>
              
              <div className="w-full bg-black/40 rounded-full h-1.5 mb-2 overflow-hidden shadow-inner">
                <div 
                  className="h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-1000 ease-out" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              
              <div className="text-right text-[10px] font-bold tracking-wider uppercase">
                {isMaxed ? (
                  <span className="text-white glow-text">Ready to level up</span>
                ) : (
                  <span className="text-white/50">{pointsNeeded} points needed</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsPage;