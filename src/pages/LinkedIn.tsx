
import React from 'react';
import Navigation from '../components/Navigation';
import { Link as LinkIcon, User, ExternalLink } from 'lucide-react';

const LinkedIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">LinkedIn Profile</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional networking profile showcasing my CTE education, skills, and career aspirations.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
            <div className="p-8">
              <div className="flex items-start space-x-6 -mt-16">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                  <p className="text-lg text-indigo-600 mb-2">CTE Student | Aspiring [Career Field] Professional</p>
                  <p className="text-gray-600">Currently studying at [School Name] | Passionate about technology and innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Profile Highlights</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span>Complete professional profile with industry-relevant keywords</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span>Detailed CTE education and certification information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span>Skills section highlighting technical competencies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span>Professional connections with industry professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span>Regular posts showcasing learning and achievements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Connect With Me</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I'm actively building my professional network and welcome connections 
                  with industry professionals, fellow students, and potential employers.
                </p>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300 group"
                  >
                    <LinkIcon className="w-5 h-5 text-indigo-600" />
                    <span className="text-indigo-700 font-medium">View Full LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-indigo-500 group-hover:text-indigo-700" />
                  </a>
                  <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                    LinkedIn URL: linkedin.com/in/johndoe-cte
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              My LinkedIn profile serves as a professional representation of my CTE journey, 
              showcasing my technical skills, educational achievements, and career aspirations. 
              Through strategic networking and content sharing, I am building relationships 
              within my chosen industry and demonstrating my commitment to professional development. 
              The profile includes detailed information about my CTE coursework, certifications, 
              project experiences, and career goals, making it an essential tool for my job search 
              and professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
