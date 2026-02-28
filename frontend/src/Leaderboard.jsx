// File 3: LeaderboardPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, Trophy, Medal, User } from 'lucide-react';

const LeaderboardPage = ({ onBack }) => {
  // State to track which stat is currently being compared
  const [activeTab, setActiveTab] = useState('Overall');

  // Mock data representing the user and their friends
  const friendsData = [
    { id: 1, name: "Alex (You)", level: 5, strength: 10, intelligence: 12, stamina: 8, charisma: 15, isMe: true },
    { id: 2, name: "Sarah", level: 6, strength: 14, intelligence: 9, stamina: 12, charisma: 10, isMe: false },
    { id: 3, name: "Jordan", level: 4, strength: 8, intelligence: 15, stamina: 6, charisma: 12, isMe: false },
    { id: 4, name: "Taylor", level: 7, strength: 16, intelligence: 14, stamina: 15, charisma: 8, isMe: false },
    { id: 5, name: "Casey", level: 5, strength: 11, intelligence: 11, stamina: 10, charisma: 14, isMe: false },
    { id: 6, name: "Morgan", level: 3, strength: 6, intelligence: 8, stamina: 7, charisma: 18, isMe: false },
  ];

  // The categories users can sort by
  const categories = ['Overall', 'Strength', 'Intelligence', 'Stamina', 'Charisma'];

  // Helper function to dynamically sort the friends array based on the active tab
  const getSortedFriends = () => {
    // We create a copy of the array using [...friendsData] so we don't mutate the original data
    return [...friendsData].sort((a, b) => {
      if (activeTab === 'Overall') return b.level - a.level;
      // Convert tab name to lowercase to match the object keys (e.g., 'Strength' -> 'strength')
      return b[activeTab.toLowerCase()] - a[activeTab.toLowerCase()];
    });
  };

  const sortedFriends = getSortedFriends();

  return (
    <div className="flex justify-center items-center h-screen bg-slate-800 text-slate-50 font-sans">
      <div className="flex flex-col w-full max-w-[400px] h-[650px] bg-slate-900 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden relative">
        
        {/* Header Section */}
        <div className="bg-slate-800 p-5 flex items-center border-b border-slate-700">
          <button 
            onClick={onBack}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 flex justify-center items-center gap-2 mr-6">
            <Trophy size={20} className="text-yellow-400" />
            <h1 className="text-xl font-bold m-0">Leaderboard</h1>
          </div>
        </div>

        {/* Tab Navigation for Stats */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-slate-700 bg-slate-800/50 p-2 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border-none cursor-pointer ${
                activeTab === category 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Leaderboard List */}
        <div className="p-4 overflow-y-auto flex-1 flex flex-col gap-3 pb-20">
          {sortedFriends.map((friend, index) => {
            const rank = index + 1;
            // Determine the display value based on the selected tab
            const displayScore = activeTab === 'Overall' ? friend.level : friend[activeTab.toLowerCase()];
            const scoreLabel = activeTab === 'Overall' ? 'Lvl' : 'Pts';

            // Styling for the top 3 ranks
            let rankStyle = "bg-slate-700 text-slate-300";
            if (rank === 1) rankStyle = "bg-yellow-500 text-yellow-900 shadow-[0_0_10px_rgba(234,179,8,0.4)]";
            else if (rank === 2) rankStyle = "bg-slate-300 text-slate-800";
            else if (rank === 3) rankStyle = "bg-amber-700 text-amber-100";

            return (
              <div 
                key={friend.id} 
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  friend.isMe ? 'bg-indigo-900/40 border-indigo-500' : 'bg-slate-800 border-slate-700/50'
                }`}
              >
                {/* Left Side: Rank and Profile */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex justify-center items-center font-bold text-sm ${rankStyle}`}>
                    {rank <= 3 ? <Medal size={16} /> : rank}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${
                      friend.isMe ? 'bg-indigo-500' : 'bg-slate-600'
                    }`}>
                      <User size={20} className="text-white" />
                    </div>
                    <div>
                      <p className={`m-0 font-bold text-sm ${friend.isMe ? 'text-indigo-300' : 'text-slate-200'}`}>
                        {friend.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Score */}
                <div className="text-right">
                  <p className="m-0 text-lg font-bold text-white">{displayScore}</p>
                  <p className="m-0 text-[10px] text-slate-400 uppercase font-bold tracking-wider">{scoreLabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;