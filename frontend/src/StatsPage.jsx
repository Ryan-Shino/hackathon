import React from 'react';
import { Shield, Star, Zap, Brain, Heart, Users, ChevronRight } from 'lucide-react';

const StatsPage = () => {
  const playerProfile = {
    level: 5,
    playerClass: "Socialite",
    title: "Life of the Party"
  };

  const stats = [
    { name: 'Strength', current: 10, nextLevel: 15, icon: <Zap size={18} />, color: 'text-red-500' },
    { name: 'Intelligence', current: 12, nextLevel: 20, icon: <Brain size={18} />, color: 'text-blue-400' },
    { name: 'Stamina', current: 8, nextLevel: 10, icon: <Heart size={18} />, color: 'text-green-400' },
    { name: 'Charisma', current: 15, nextLevel: 15, icon: <Users size={18} />, color: 'text-purple-400' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2c1810] p-4 pixel-font select-none">
      
      {/* Pixel Header - Matching Leaderboard Style */}
      <div className="relative mb-8 mt-2">
        <div className="bg-[#5d4037] border-b-4 border-r-4 border-black p-4 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Shield size={28} className="text-[#ffd700] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
            <h1 className="text-2xl font-black text-[#f5f5f5] tracking-tighter uppercase drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              Hero Profile
            </h1>
          </div>
        </div>
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
      </div>

      {/* Identity Card - Using the "isMe" highlighted style */}
      <div 
        className="relative flex items-center gap-4 p-4 border-4 border-black bg-[#8d6e63] mb-8"
        style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.4)' }}
      >
        <div className="w-16 h-16 bg-[#d4b57e] border-4 border-black flex items-center justify-center shadow-[inset_-4px_-4px_0px_#8d6e63]">
          <Shield size={32} className="text-[#3e2723]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Star size={14} className="text-[#ffd700] fill-[#ffd700]" />
            <h2 className="text-xl font-black text-white uppercase italic tracking-tighter">
              Level {playerProfile.level}
            </h2>
          </div>
          <p className="text-sm font-bold text-[#3e2723] uppercase tracking-wide bg-[#d4b57e] px-2 inline-block">
            {playerProfile.playerClass}
          </p>
          <p className="block text-[10px] text-white/70 font-bold italic mt-1">
            "{playerProfile.title}"
          </p>
        </div>
      </div>

      {/* Stats Breakdown Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-black text-[#d4b57e] uppercase tracking-[0.2em] mb-2 px-1 border-l-4 border-[#d4b57e]">
          Attribute Progression
        </h3>
        
        {stats.map((stat, index) => {
          const progressPercentage = Math.min((stat.current / stat.nextLevel) * 100, 100);
          const pointsNeeded = stat.nextLevel - stat.current;
          const isMaxed = pointsNeeded === 0;

          return (
            <div 
              key={index} 
              className="bg-[#3e2723] border-4 border-black p-4 flex flex-col gap-3"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
            >
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <span className={stat.color}>{stat.icon}</span>
                  <span className="text-sm font-black text-[#d7ccc8] uppercase tracking-tighter">
                    {stat.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#d4b57e] leading-none">
                    {stat.current}
                  </span>
                  <span className="text-[10px] font-bold text-white/30 uppercase ml-1">
                    / {stat.nextLevel}
                  </span>
                </div>
              </div>
              
              {/* Retro Progress Bar */}
              <div className="w-full bg-black h-4 border-2 border-[#5d4037] p-[2px]">
                <div 
                  className={`h-full transition-all duration-1000 ${isMaxed ? 'bg-[#ffd700]' : 'bg-[#d4b57e]'}`}
                  style={{ 
                    width: `${progressPercentage}%`,
                    boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.3)' 
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">
                  System.Attr_{stat.name.substring(0,3)}
                </span>
                {isMaxed ? (
                  <span className="text-[9px] bg-white text-black px-2 font-black uppercase italic animate-pulse">
                    Ready to level up
                  </span>
                ) : (
                  <span className="text-[9px] font-bold text-[#d4b57e]/60 uppercase">
                    {pointsNeeded} points needed
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Retro Footer Decoration */}
      <div className="mt-auto pt-8 flex justify-center opacity-20">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;