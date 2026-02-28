import React, { useState } from 'react';
import { Trophy, Medal, User, Sword, BookOpen, Heart, Sparkles, ChevronRight } from 'lucide-react';

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

  const categories = [
    { name: 'Overall', icon: <Trophy size={14} />, color: 'text-yellow-400' },
    { name: 'Strength', icon: <Sword size={14} />, color: 'text-red-500' },
    { name: 'Intelligence', icon: <BookOpen size={14} />, color: 'text-blue-400' },
    { name: 'Stamina', icon: <Heart size={14} />, color: 'text-green-400' },
    { name: 'Charisma', icon: <Sparkles size={14} />, color: 'text-purple-400' },
  ];

  const getSortedFriends = () => {
    return [...friendsData].sort((a, b) => {
      if (activeTab === 'Overall') return b.level - a.level;
      return b[activeTab.toLowerCase()] - a[activeTab.toLowerCase()];
    });
  };

  const sortedFriends = getSortedFriends();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2c1810] p-4 pixel-font select-none">
      
      {/* Pixel Header */}
      <div className="relative mb-8 mt-2">
        <div className="bg-[#5d4037] border-b-4 border-r-4 border-black p-4 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Trophy size={28} className="text-[#ffd700] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
            <h1 className="text-2xl font-black text-[#f5f5f5] tracking-tighter uppercase drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              Hall of Heroes
            </h1>
          </div>
        </div>
        {/* Decorative corner accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
      </div>

      {/* Retro Tab Navigation */}
      <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(cat.name)}
            className={`flex items-center gap-2 px-4 py-2 border-2 border-black whitespace-nowrap transition-transform active:translate-y-1 ${
              activeTab === cat.name 
                ? 'bg-[#d4b57e] shadow-[inset_-4px_-4px_0px_#8d6e63] translate-y-[2px]' 
                : 'bg-[#3e2723] text-white/60 shadow-[4px_4px_0px_#000]'
            }`}
          >
            <span className={activeTab === cat.name ? 'text-[#3e2723]' : cat.color}>{cat.icon}</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === cat.name ? 'text-[#3e2723]' : ''}`}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Pixel Leaderboard List */}
      <div className="flex flex-col gap-4 mt-2">
        {sortedFriends.map((friend, index) => {
          const rank = index + 1;
          const displayScore = activeTab === 'Overall' ? friend.level : friend[activeTab.toLowerCase()];
          const scoreLabel = activeTab === 'Overall' ? 'LVL' : 'PTS';
          
          // Rank colours
          const rankColors = {
            1: 'bg-[#ffd700] border-[#b8860b]',
            2: 'bg-[#c0c0c0] border-[#708090]',
            3: 'bg-[#cd7f32] border-[#8b4513]',
            default: 'bg-[#5d4037] border-black text-[#d7ccc8]'
          };

          const currentRankStyle = rankColors[rank] || rankColors.default;

          return (
            <div 
              key={friend.id} 
              className={`relative flex items-center justify-between p-3 border-4 border-black transition-all ${
                friend.isMe 
                  ? 'bg-[#8d6e63] scale-[1.02] z-10' 
                  : 'bg-[#3e2723]'
              }`}
              style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.4)' }}
            >
              <div className="flex items-center gap-4">
                {/* Rank Badge */}
                <div className={`w-10 h-10 flex items-center justify-center border-4 border-black font-black italic text-lg ${currentRankStyle}`}>
                  {rank <= 3 ? <Medal size={20} className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]" /> : rank}
                </div>
                
                {/* Avatar & Name */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 border-2 border-black flex items-center justify-center ${friend.isMe ? 'bg-[#d4b57e]' : 'bg-[#2c1810]'}`}>
                    <User size={24} className={friend.isMe ? 'text-[#3e2723]' : 'text-white/40'} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-tight ${friend.isMe ? 'text-white italic underline underline-offset-4' : 'text-[#d7ccc8]'}`}>
                      {friend.name}
                    </h3>
                    {friend.isMe && (
                      <span className="text-[8px] bg-white text-black px-1 font-bold">YOUR LEGEND</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-2xl font-black text-[#d4b57e] leading-none tracking-tighter drop-shadow-[2px_2px_0px_#000]">
                    {displayScore}
                  </div>
                  <div className="text-[9px] font-bold text-white/40 leading-none mt-1 uppercase">
                    {scoreLabel}
                  </div>
                </div>
                <ChevronRight size={16} className="text-white/20" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Retro Footer Decoration */}
      <div className="mt-8 flex justify-center opacity-20">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;