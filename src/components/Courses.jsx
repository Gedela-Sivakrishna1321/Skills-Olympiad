import React from 'react';
import Header from './Skill Courses/Header';
import SkillGrid from './Skill Courses/SkillGrid';
import LevelSection from './Skill Courses/LevelSection';
import CallToAction from './Skill Courses/CallToAction';

function Courses() {
  return (
    <div id="courses" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <SkillGrid />
        <LevelSection />
        <CallToAction />
      </div>
    </div>
  );
}

export default Courses;