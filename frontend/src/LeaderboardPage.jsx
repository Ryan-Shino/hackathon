// File 3: LeaderboardPage.jsx
import React, { useState } from 'react';
import { Trophy, Medal, User } from 'lucide-react';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('Overall');

  const friendsData = [
    { id: 1, name: "Alex (You)", level: 5, strength: 10, intelligence: 12, stamina: 8, charisma: 15, isMe: true },
    { id: 2, name: "Sarah", level: 6, strength: 14, intelligence: 9, stamina: 12, charisma: 10, isMe: false },
    { id: 3, name: "Jordan", level: 4, strength: 8, intelligence: 15, stamina: 6, charisma: 12, isMe: false },
    { id: 4, name: "Taylor", level: 7, strength: 16, intelligence: 14, stamina: 15, charisma: 8, isMe: false },
    { id: 5, name: "Casey", level: 5, strength: 11, intelligence: 11, stamina: 10, charisma: 14, isMe: false },
    { id: 6, name: "Morgan", level: 3, strength: 6, intelligence: 8, stamina: 7, charisma: 18, isMe: false },
  ];

  const categories = ['Overall', 'Strength', 'Intelligence', 'Stamina', 'Charisma'];

  const getSortedFriends = () => {
    return [...friendsData].sort((a, b) => {
      if (activeTab === 'Overall') return b.level - a.level;
      return b[activeTab.toLowerCase()] - a[activeTab.toLowerCase()];
    });
  };

  const sortedFriends = getSortedFriends();

  return (
    <div className="flex flex-col w-full h-full">
      
      {/* Header */}
      <div className="p-5 pb-2 flex justify-center items-center gap-3">
        <Trophy size={24} className="text-white glow-number" />
        <h1 className="text-2xl font-bold m-0 glow-text tracking-wider uppercase text-white">Ranks</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide p-4 gap-3 border-b border-white/5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 border-none cursor-pointer ${
              activeTab === category 
                ? 'bg-white text-black shadow-[0_0_8px_rgba(255,255,255,0.4)]' 
                : 'bg-white/10 text-white/50 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Leaderboard List */}
      <div className="p-4 flex flex-col gap-3 pb-6">
        {sortedFriends.map((friend, index) => {
          const rank = index + 1;
          const displayScore = activeTab === 'Overall' ? friend.level : friend[activeTab.toLowerCase()];
          const scoreLabel = activeTab === 'Overall' ? 'Lvl' : 'Pts';

          // Subdued styling for the top 3 ranks
          let rankStyle = "bg-white/5 text-white/60 border border-white/10";
          if (rank === 1) rankStyle = "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)] glow-number";
          else if (rank === 2) rankStyle = "bg-white/80 text-black shadow-[0_0_5px_rgba(255,255,255,0.3)]";
          else if (rank === 3) rankStyle = "bg-white/40 text-black";

          return (
            <div 
              key={friend.id} 
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                friend.isMe 
                  ? 'bg-white/10 border-white/60 shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/5 border-transparent hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex justify-center items-center font-bold text-sm ${rankStyle}`}>
                  {rank <= 3 ? <Medal size={16} /> : rank}
                </div>
                
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                    friend.isMe ? 'bg-white/10 border-white/50 glow-number' : 'bg-black/50 border-white/10'
                  }`}>
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`m-0 font-bold tracking-wide ${friend.isMe ? 'text-white glow-text' : 'text-white/80'}`}>
                      {friend.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="m-0 text-xl font-black text-white glow-number">{displayScore}</p>
                <p className="m-0 text-[9px] text-white/50 uppercase font-bold tracking-widest">{scoreLabel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardPage;