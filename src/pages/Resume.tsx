
import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, Mail, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Professional Development</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Cover Letter</h2>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">
                  A professionally crafted cover letter tailored to specific job opportunities, 
                  highlighting relevant CTE skills and experiences.
                </p>
                <p className="mb-4">
                  Key elements include personalized content, specific achievements, 
                  and clear connections between my qualifications and employer needs.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                  View Cover Letter
                </button>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Resume</h2>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Comprehensive resume showcasing CTE education, technical skills, 
                  work experience, and academic achievements.
                </p>
                <p className="mb-4">
                  Formatted professionally with clear sections for education, 
                  skills, experience, and accomplishments relevant to my career field.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                  View Resume
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Professional Documents</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">References</h3>
                <p className="text-sm text-gray-600 mb-4">Professional references from instructors and employers</p>
                <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                  View References
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Job Application</h3>
                <p className="text-sm text-gray-600 mb-4">Sample completed job application demonstrating attention to detail</p>
                <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                  View Application
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Portfolio Summary</h3>
                <p className="text-sm text-gray-600 mb-4">Comprehensive overview of professional development journey</p>
                <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                  View Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
