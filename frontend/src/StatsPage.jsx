// File 2: StatsPage.jsx
import React from 'react';
import { ArrowLeft, Shield, Star, Zap, Brain, Heart, Users } from 'lucide-react';

const StatsPage = ({ onBack }) => {
  const playerProfile = {
    level: 5,
    playerClass: "Socialite",
    title: "Life of the Party"
  };

  const stats = [
    { name: 'Strength', current: 10, nextLevel: 15, icon: <Zap size={18} className="text-red-400" />, barColour: 'bg-red-500' },
    { name: 'Intelligence', current: 12, nextLevel: 20, icon: <Brain size={18} className="text-blue-400" />, barColour: 'bg-blue-500' },
    { name: 'Stamina', current: 8, nextLevel: 10, icon: <Heart size={18} className="text-green-400" />, barColour: 'bg-green-500' },
    { name: 'Charisma', current: 15, nextLevel: 15, icon: <Users size={18} className="text-yellow-400" />, barColour: 'bg-yellow-500' },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-slate-800 text-slate-50 font-sans">
      <div className="flex flex-col w-full max-w-[400px] h-[650px] bg-slate-900 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-800 p-5 flex items-center border-b border-slate-700">
          <button 
            onClick={onBack}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="flex-1 text-center text-xl font-bold m-0 mr-6">Character Profile</h1>
        </div>

        <div className="p-6 overflow-y-auto">
          {/* Identity Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-800 p-5 rounded-xl shadow-lg mb-6 border border-indigo-500/30 flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-indigo-500 rounded-full flex justify-center items-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <Shield size={32} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <h2 className="text-lg font-bold m-0">Level {playerProfile.level}</h2>
              </div>
              <p className="text-indigo-200 text-sm font-semibold m-0">{playerProfile.playerClass}</p>
              <p className="text-slate-400 text-xs italic m-0">"{playerProfile.title}"</p>
            </div>
          </div>

          {/* Stats Breakdown */}
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
            Attribute Progression
          </h3>
          
          <div className="flex flex-col gap-5">
            {stats.map((stat, index) => {
              const progressPercentage = Math.min((stat.current / stat.nextLevel) * 100, 100);
              const pointsNeeded = stat.nextLevel - stat.current;
              const isMaxed = pointsNeeded === 0;

              return (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {stat.icon}
                      <span className="font-bold text-slate-200">{stat.name}</span>
                    </div>
                    <div className="text-sm font-bold">
                      <span className="text-white">{stat.current}</span>
                      <span className="text-slate-500"> / {stat.nextLevel}</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full ${stat.barColour} transition-all duration-500 ease-out`} 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  
                  {/* Points Needed Text */}
                  <div className="text-right text-xs font-medium">
                    {isMaxed ? (
                      <span className="text-green-400">Ready to level up!</span>
                    ) : (
                      <span className="text-slate-400">{pointsNeeded} points needed</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsPage;