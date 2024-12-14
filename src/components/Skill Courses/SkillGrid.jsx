import React from 'react';
import { Monitor, Cpu, Shirt, Car, Wrench } from 'lucide-react';
import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: 'IT/ITES',
    description: 'Digital skills for the modern workplace',
    Icon: Monitor,
  },
  {
    title: 'Electrical & Electronics',
    description: 'Power the future with essential electrical skills',
    Icon: Cpu,
  },
  {
    title: 'Apparel',
    description: 'Master the art of fashion and design',
    Icon: Shirt,
  },
  {
    title: 'Automotive',
    description: 'Drive your career in automotive technology',
    Icon: Car,
  },
  {
    title: 'Plumbing',
    description: 'Essential skills for modern infrastructure',
    Icon: Wrench,
  },
];

const SkillGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          title={category.title}
          description={category.description}
          Icon={category.Icon}
        />
      ))}
    </div>
  );
};

export default SkillGrid;