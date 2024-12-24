import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Shield,
  MonitorSmartphone,
  Wrench,
  Award,
  AlertTriangle,
  Info,
} from "lucide-react";

const EligibilityCard = ({ icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-96" : "max-h-20"
            }`}
          >
            {children}
          </div>
          {!isExpanded && (
            <button className="text-blue-600 text-sm mt-2 hover:text-blue-700">
              Read more...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const LevelCard = ({ level, grades, description }) => (
  <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
    <h4 className="font-semibold text-gray-900">Level {level}</h4>
    <p className="text-gray-700">{grades}</p>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

export default function Eligibility() {
  return (
    <section
      id="eligibility"
      className="pb-20 pt-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Eligibility & Rules
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about participating
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <EligibilityCard
            icon={<Users className="w-6 h-6" />}
            title="Eligibility Criteria"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Open to students aged 12-20 years with interest in developing
                practical skills.
              </p>
              <div className="grid gap-3">
                <LevelCard
                  level="1"
                  grades="9th & 10th"
                  description="Foundation level for young learners"
                />
                <LevelCard
                  level="2"
                  grades="I.T.I, +2 & Intermediate"
                  description="Intermediate skill development"
                />
                <LevelCard
                  level="3"
                  grades="Diploma & B. Tech (Age below 20 years)"
                  description="Advanced technical training"
                />
                <LevelCard
                  level="4"
                  grades="B. Tech students below 20 years"
                  description="Professional engineering skills"
                />
              </div>
            </div>
          </EligibilityCard>

          <EligibilityCard
            icon={<ClipboardList className="w-6 h-6" />}
            title="Registration Process"
          >
            <ul className="space-y-2 text-gray-600">
              <li>• Individual registration required</li>
              <li>• No account creation needed</li>
              <li>• Strict deadline-based registration</li>
              <li>• Valid ID proof submission</li>
              <li>• Choose online or offline exam format</li>
            </ul>
          </EligibilityCard>

          <EligibilityCard
            icon={<Shield className="w-6 h-6" />}
            title="Code of Conduct"
          >
            <ul className="space-y-2 text-gray-600">
              <li>• Maintain exam integrity</li>
              <li>• No unauthorized communication</li>
              <li>• Early arrival for offline exams</li>
              <li>• Follow supervisor instructions</li>
              <li>• Respect fellow participants</li>
            </ul>
          </EligibilityCard>

          <EligibilityCard
            icon={<MonitorSmartphone className="w-6 h-6" />}
            title="Online Exam Guidelines"
          >
            <ul className="space-y-2 text-gray-600">
              <li>• Stable internet connection required</li>
              <li>• No screen sharing allowed</li>
              <li>• Webcam monitoring during exam</li>
              <li>• Single device usage only</li>
              <li>• Time-bound completion</li>
            </ul>
          </EligibilityCard>

          <EligibilityCard
            icon={<Wrench className="w-6 h-6" />}
            title="Practical Exam Rules"
          >
            <ul className="space-y-2 text-gray-600">
              <li>• Independent skill demonstration</li>
              <li>• No unauthorized tools</li>
              <li>• Safety protocol compliance</li>
              <li>• Time management essential</li>
              <li>• Quality-focused assessment</li>
            </ul>
          </EligibilityCard>

          <EligibilityCard
            icon={<Award className="w-6 h-6" />}
            title="Scoring & Recognition"
          >
            <div className="space-y-3 text-gray-600">
              <p>• Minimum 60% score required for advancement</p>
              <p>• Stage-specific scoring criteria</p>
              <p>• Recognition from:</p>
              <ul className="pl-6 space-y-1">
                <li>- Centurion University</li>
                <li>- NSDC certification</li>
                <li>- Industry partner endorsements</li>
              </ul>
            </div>
          </EligibilityCard>

          <EligibilityCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Disqualification & Appeals"
          >
            <div className="space-y-3 text-gray-600">
              <p className="font-semibold text-red-600">
                Grounds for Disqualification:
              </p>
              <ul className="space-y-1">
                <li>• Cheating or malpractice</li>
                <li>• Rule violations</li>
                <li>• Misconduct</li>
              </ul>
              <p className="font-semibold text-blue-600 mt-3">
                Appeals Process:
              </p>
              <ul className="space-y-1">
                <li>• 48-hour submission window</li>
                <li>• Written appeal required</li>
                <li>• Evidence-based review</li>
              </ul>
            </div>
          </EligibilityCard>

          <EligibilityCard
            icon={<Info className="w-6 h-6" />}
            title="Additional Information"
          >
            <div className="space-y-3 text-gray-600">
              <p>• Regular updates via registered email</p>
              <p>• Support desk available during exams</p>
              <p>• Special arrangements for differently-abled</p>
              <p>• Result declaration within 7 days</p>
              <p>• Certificate delivery within 30 days</p>
            </div>
          </EligibilityCard>
        </div>

        <div className="text-center cursor-pointer">
          <a
            href="#registration"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
