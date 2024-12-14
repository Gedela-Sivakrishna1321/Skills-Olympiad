import React from 'react';

const LevelBadge = ({ level, description }) => {
  const colors = {
    '1': 'bg-green-100 text-green-800 border-green-200',
    '2': 'bg-blue-100 text-blue-800 border-blue-200',
    '3': 'bg-purple-100 text-purple-800 border-purple-200',
  };

  const levelNum = level.split(' ')[1];
  const colorClass = colors[levelNum];

  return (
    <div className={`p-4 rounded-lg border ${colorClass} transition-all duration-300 hover:scale-105`}>
      <h4 className="font-semibold mb-2">Level {levelNum}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default LevelBadge;