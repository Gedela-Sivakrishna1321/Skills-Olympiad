import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Team from './components/Team';
import Facilities from './components/Facilities';
import Eligibility from './components/Eligibility';
import Registration from './components/Registration';
import Courses from './components/Courses';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Eligibility />
      <Team />
      <Facilities />
      <Registration/>
      <Courses/>
    </div>
  );
}

export default App;