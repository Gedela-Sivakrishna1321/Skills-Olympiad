import React from 'react';
import { Phone, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
      <div className="flex flex-col items-center space-y-8">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Apply Now
          </button>
          {/* <button className="w-full sm:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
            Contact Us
          </button> */}
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">6370317882</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;