import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Team from './components/Team';
import Facilities from './components/Facilities';
import Eligibility from './components/Eligibility';
import Registration from './components/Registration';
import Courses from './components/Courses';
import Resources from './components/Resources';
import Contact from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Eligibility />
      <Team />
      <Facilities />
      <Courses/>
      <Resources/>
      <Contact/>
      <Registration/>
    </div>
  );
}

export default App;