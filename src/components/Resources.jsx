import React from 'react';
import { BookOpen } from 'lucide-react';

function Resources() {
  return (
    <section id="resources"
     className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
        <p className="text-xl text-gray-600 mb-8">
          Access study materials and resources for skill courses to enhance your learning journey.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1KexUtKdfeGztJh0HcnG0Bo6hZBXQnuss?usp=sharing" // Replace with your Google Drive link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <BookOpen className="w-6 h-6 mr-2" />
          Access Resources
        </a>
      </div>
    </section>
  );
}

export default Resources;