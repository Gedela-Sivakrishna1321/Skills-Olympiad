import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, Clock, HelpCircle, CheckCircle } from 'lucide-react';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const formSteps = [
    {
      title: 'Personal Details',
      fields: ['Full Name', 'Email', 'Phone', 'Date of Birth']
    },
    {
      title: 'Academic Information',
      fields: ['Institution Name', 'Current Grade/Year', 'Field of Study']
    },
    {
      title: 'Exam Preferences',
      fields: ['Exam Mode', 'Preferred Center', 'Preferred Date']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between mb-8">
        {formSteps.map((formStep, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-600' : 'bg-gray-200'
            } text-white font-semibold`}>
              {step > index + 1 ? <CheckCircle className="w-5 h-5" /> : index + 1}
            </div>
            {index < formSteps.length - 1 && (
              <div className={`w-24 h-1 mx-2 ${step > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-bold text-gray-900">{formSteps[step - 1].title}</h3>
        {formSteps[step - 1].fields.map((field, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{field}</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter your ${field.toLowerCase()}`}
            />
          </div>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => step < 3 ? setStep(step + 1) : null}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {step === 3 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What are the registration fees?',
      answer: 'Registration fees vary by level: Level 1: ₹500, Level 2: ₹750, Level 3: ₹1000, Level 4: ₹1200'
    },
    {
      question: 'What documents are required?',
      answer: 'Valid ID proof, recent photograph, and current academic year credentials'
    },
    {
      question: 'Is there an age limit?',
      answer: 'Yes, participants must be between 11-20 years old depending on their competition level'
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-start">
            <HelpCircle className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">{faq.question}</h4>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Registration() {
  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-4xl font-bold text-gray-900">Registration</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the Skills Olympiad and take the first step towards showcasing your talents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <RegistrationForm />
          </div>
          <div className="space-y-8">
            <div className="bg-blue-600 text-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Important Dates</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Registration Deadline: March 1, 2024</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Document Verification: March 5, 2024</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Exam Date: March 15, 2024</span>
                </li>
              </ul>
            </div>
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}