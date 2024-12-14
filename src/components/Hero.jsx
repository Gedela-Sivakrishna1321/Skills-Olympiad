import React from 'react';
import { Award, Users, Trophy, Target, Star } from 'lucide-react';

const StatCard = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl transform hover:scale-105 transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

const Vision = () => (
  <div className="mt-24 py-16 bg-white/5 backdrop-blur-lg rounded-xl animate-fade-in">
    <div className="max-w-4xl mx-auto text-center px-6">
      <div className="flex items-center justify-center mb-6">
        <Target className="w-8 h-8 text-yellow-400 mr-2" />
        <h2 className="text-3xl font-bold text-white">Our Vision</h2>
      </div>
      <p className="text-lg text-blue-100 leading-relaxed">
        To empower students across diverse disciplines by fostering practical skills and real-world expertise through competitive challenges. Our vision is to bridge the gap between academic knowledge and industry readiness, inspiring students to achieve excellence and preparing them for success in a dynamic, skills-driven workforce.
      </p>
    </div>
  </div>
);

export default function Hero() {
  return (
    <div id="home"
     className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-slide-down">
              Unleash Your <span className="text-yellow-400">Potential</span> at Skills Olympiad
            </h1>
            <p className="text-xl text-blue-100 animate-slide-up">
              Join India's premier skills competition and showcase your talent to industry leaders
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a href="#registration"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                Register Now
              </a>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard
              icon={<Trophy className="w-8 h-8 text-yellow-400" />}
              title="75%+"
              description="Success Rate"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-yellow-400" />}
              title="5K+"
              description="Participants"
            />
            <StatCard
              icon={<Award className="w-8 h-8 text-yellow-400" />}
              title="50+"
              description="Industry Partners"
            />
            <StatCard
              title="₹2L+"
              description="Prize Pool"
              icon={<Star className="w-8 h-8 text-yellow-400" />}
            />
          </div>
        </div>

        <Vision />
      </div>
    </div>
  );
}