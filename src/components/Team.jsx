import React from 'react';
import { Users, Building2 } from 'lucide-react';
import PartnerGrid from './PartnerGrid';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
            Skill Olympiad is spearheaded by a dedicated team of educators, industry professionals, and technology enthusiasts passionate about bridging the gap between academic learning and real-world skills. Our team is committed to empowering students by providing a structured pathway to showcase their talents, gain hands-on experience, and receive recognition for their achievements.
          </p>
        </div>

        {/* Partners Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in">
            We are proud to partner with prestigious organizations, including the National Skill Development Corporation (NSDC), and industry experts. These collaborations ensure that our competitions align with current industry standards and equip participants with certifications that are widely recognized and valued in both academic and professional circles.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
            Together, our team and partners aim to foster a culture of skill excellence, enabling students to reach their highest potential and become future-ready professionals.
          </p>
        </div>

        {/* Partners Grid */}
        <PartnerGrid />
      </div>
    </section>
  );
}