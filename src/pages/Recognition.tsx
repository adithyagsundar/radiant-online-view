
import React from 'react';
import Navigation from '../components/Navigation';
import { Award, Medal, Trophy, Star } from 'lucide-react';

const Recognition = () => {
  const recognitions = [
    {
      type: "Academic Achievement",
      title: "CTE Student of the Month",
      description: "Recognized for outstanding performance and dedication in CTE coursework",
      date: "March 2024",
      icon: Trophy
    },
    {
      type: "Industry Certification",
      title: "Professional Certification",
      description: "Successfully completed industry-recognized certification program",
      date: "February 2024", 
      icon: Medal
    },
    {
      type: "Leadership Award",
      title: "Peer Leadership Recognition",
      description: "Acknowledged for mentoring fellow students and demonstrating leadership qualities",
      date: "January 2024",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Recognition & Awards</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of awards, certificates, evaluations, and recognition received 
              throughout my CTE journey, demonstrating achievement and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recognitions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3 inline-block">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <p className="text-sm text-indigo-600 font-medium">{item.date}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Certificates & Credentials</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Industry-recognized technical certifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Professional development course completions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Safety training and compliance certifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Academic achievement awards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Letters of Recommendation</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Professional references and letters of recommendation from:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span>CTE Program Instructors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span>Industry Mentors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span>Internship Supervisors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span>Academic Counselors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recognition Reflection</h3>
            <p className="text-gray-600 leading-relaxed">
              These recognitions represent milestones in my CTE journey and validate the hard work 
              and dedication I have invested in my professional development. Each award and certificate 
              not only acknowledges past achievements but also motivates continued excellence and 
              growth. The letters of recommendation provide third-party validation of my skills, 
              work ethic, and character, offering valuable perspectives from educators and industry 
              professionals who have observed my development firsthand. Together, these documents 
              demonstrate my commitment to excellence and readiness for professional opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
