import React from 'react';
import LevelBadge from './LevelBadge';

const levels = [
  { level: 'Level 1', description: '9th & 10th' },
  { level: 'Level 2', description: 'ITI, +2 & Intermediate' },
  { level: 'Level 3', description: 'Diploma & B.Tech (Below 20 Years Age)' },
];

const LevelSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Levels of Skill Tests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <LevelBadge
            key={level.level}
            level={level.level}
            description={level.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelSection;