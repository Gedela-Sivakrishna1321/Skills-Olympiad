import React, { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="#home"
           className="flex items-center cursor-pointer">
            <Trophy className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Skills Olympiad</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#process">How It Works</NavLink>
            <NavLink href="#team">Team & Partners</NavLink>
            <NavLink href="#facilities">Facilities</NavLink>
            <NavLink href="#eligibility">Eligibility</NavLink>
            <NavLink href="#courses">Skill Courses</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <NavLink href="#contact">Contact us</NavLink>
            {/* <NavLink href="#registration">Register</NavLink>
            <NavLink href="#resources">Resources</NavLink> */}
            {/* <NavLink href="#registration">
            <button  onClick={() => window.open("https://forms.gle/uQ3Pd4Yv3Yrqz6fw9", "_blank")}
             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            </NavLink> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div  onClick={() => setIsOpen(!isOpen)}
           className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#process">How It Works</MobileNavLink>
            <MobileNavLink href="#team">Team & Partners</MobileNavLink>
            <MobileNavLink href="#facilities">Facilities</MobileNavLink>
            <MobileNavLink href="#eligibility">Eligibility</MobileNavLink>
            <MobileNavLink href="#courses">Skill Courses</MobileNavLink>
            <MobileNavLink href="#resources">Resources</MobileNavLink>
            <MobileNavLink href="#contact">Contact us</MobileNavLink>
            {/* <MobileNavLink href="#registration">
            <button onClick={() => window.open("https://forms.gle/uQ3Pd4Yv3Yrqz6fw9", "_blank")}
            className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            </MobileNavLink> */}
            {/* <MobileNavLink href="#resources">Resources</MobileNavLink> */}
          
          </div>
        </div>
      )}
    </nav>
  );
}