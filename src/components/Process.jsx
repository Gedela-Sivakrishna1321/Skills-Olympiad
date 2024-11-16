import React from 'react';
import { ClipboardCheck, Users, Trophy, Medal, CheckCircle2, Timer, Award, Sparkles, Target, Star, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProcessStep = ({ icon, step, title, description, color }) => (
  <div className="relative">
    {/* Timeline connector */}
    {step < 4 && (
      <div className="hidden md:block absolute top-24 left-1/2 w-full h-1 bg-gray-200">
        <div className={`h-full ${color} transition-all duration-500`} style={{ width: '0%' }} />
      </div>
    )}
    
    <div className="relative group">
      <div className={`absolute inset-0 ${color}/10 rounded-xl transform -rotate-6 group-hover:rotate-0 transition-transform`}></div>
      <div className="relative bg-white p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
        <div className="mb-4">{icon}</div>
        <div className={`absolute -top-4 -right-4 w-8 h-8 ${color} text-white rounded-full flex items-center justify-center font-bold`}>
          {step}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const StageDetail = ({ icon, title, description, requirements }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 ml-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {requirements && (
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900">Requirements:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ObjectiveCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Process() {
  // const navigate = useNavigate();
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Your journey to excellence in four stages</p>
        </div>

        {/* Main Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          <ProcessStep
            icon={<ClipboardCheck className="w-12 h-12 text-blue-600" />}
            step={1}
            title="Registration"
            description="Sign up for Skill Olympiad, selecting online or offline exam format"
            color="bg-blue-600"
          />
          <ProcessStep
            icon={<CheckCircle2 className="w-12 h-12 text-emerald-600" />}
            step={2}
            title="Initial Assessment"
            description="Complete foundational exam with minimum 60% score to advance"
            color="bg-emerald-600"
          />
          <ProcessStep
            icon={<Timer className="w-12 h-12 text-orange-600" />}
            step={3}
            title="Practical Exam"
            description="Demonstrate skills through hands-on practical challenges"
            color="bg-orange-600"
          />
          <ProcessStep
            icon={<Award className="w-12 h-12 text-purple-600" />}
            step={4}
            title="Recognition"
            description="Earn certifications, prizes, and industry recognition"
            color="bg-purple-600"
          />
        </div>

        {/* Detailed Stages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <StageDetail
            icon={<Trophy className="w-10 h-10 text-blue-600" />}
            title="Stage 1: Registration"
            description="Begin your journey by registering for the Skill Olympiad. Choose between online and offline exam formats based on your preference and location."
            requirements={[
              "Valid ID proof",
              "Recent photograph",
              "Academic credentials",
              "Contact information"
            ]}
          />
          <StageDetail
            icon={<Users className="w-10 h-10 text-emerald-600" />}
            title="Stage 2: Initial Assessment"
            description="Participate in our comprehensive foundational exam to demonstrate your theoretical knowledge and basic understanding."
            requirements={[
              "Minimum 60% score required",
              "Time-bound assessment",
              "Multiple choice questions",
              "Subject-specific modules"
            ]}
          />
          <StageDetail
            icon={<Medal className="w-10 h-10 text-orange-600" />}
            title="Stage 3: Practical Exam"
            description="Show your practical skills through hands-on challenges designed to test real-world application of your knowledge."
            requirements={[
              "Follow safety protocols",
              "Complete tasks within timeframe",
              "Demonstrate proper technique",
              "Meet quality standards"
            ]}
          />
          <StageDetail
            icon={<Sparkles className="w-10 h-10 text-purple-600" />}
            title="Stage 4: Awards & Recognition"
            description="Top performers receive recognition through various rewards and opportunities for further growth."
            requirements={[
              "Industry-recognized certification",
              "Monetary prizes",
              "Skill development discounts",
              "Networking opportunities"
            ]}
          />
        </div>

        <div className="text-center cursor-pointer">
          <a href="#registration"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
            Start Your Journey Now
          </a>
        </div>
      </div>

      <div className="text-center mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
          <p className="text-xl text-gray-600 mb-12">Empowering students through excellence and recognition</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ObjectiveCard
              icon={<Target className="w-10 h-10 text-blue-600" />}
              title="Skill Development and Recognition"
              description="A platform for students to showcase and enhance skills through competitive exams simulating real-world challenges."
            />
            <ObjectiveCard
              icon={<Star className="w-10 h-10 text-blue-600" />}
              title="Pathway to Excellence"
              description="Reward students scoring above 75% in the initial exam by advancing them to the hands-on practical evaluation stage."
            />
            <ObjectiveCard
              icon={<Award className="w-10 h-10 text-blue-600" />}
              title="Industry-Standard Certification"
              description="Recognize top performers with prestigious certifications from NSDC, universities, and industry partners, plus monetary prizes."
            />
            <ObjectiveCard
              icon={<BookOpen className="w-10 h-10 text-blue-600" />}
              title="Encouraging Competence"
              description="Motivate students to achieve higher competency, instilling confidence and fostering lifelong learning."
            />
          </div>
        </div>
    </section>
  );
}