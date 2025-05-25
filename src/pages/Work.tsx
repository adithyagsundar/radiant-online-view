
import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, Link as LinkIcon, Award } from 'lucide-react';

const Work = () => {
  const workSamples = [
    {
      title: "CTE Project #1",
      description: "Comprehensive project demonstrating technical skills and problem-solving abilities developed in CTE coursework.",
      type: "Technical Project",
      date: "Fall 2023",
      skills: ["Problem Solving", "Technical Analysis", "Project Management"],
      summary: "This project showcases my ability to apply theoretical knowledge to practical challenges, demonstrating both technical competency and professional work habits."
    },
    {
      title: "CTE Project #2", 
      description: "Collaborative team project highlighting communication, leadership, and technical implementation skills.",
      type: "Team Collaboration",
      date: "Spring 2024",
      skills: ["Team Leadership", "Communication", "Technical Implementation"],
      summary: "Through this collaborative effort, I demonstrated my ability to work effectively in team environments while contributing technical expertise and leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">CTE Work Samples</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of my best work from CTE courses, demonstrating 
              technical skills, professional development, and real-world application of learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {workSamples.map((sample, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white opacity-80" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{sample.title}</h3>
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {sample.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{sample.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Skills Demonstrated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sample.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-800 mb-2">Work Sample Summary:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{sample.summary}</p>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                      <FileText className="w-4 h-4" />
                      <span>View Project</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                      <LinkIcon className="w-4 h-4" />
                      <span>Summary Form</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Work Sample Reflection</h2>
            </div>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                These work samples represent my growth and development throughout my CTE program. 
                Each project challenged me to apply classroom learning to real-world scenarios, 
                developing both technical competencies and professional skills.
              </p>
              <p className="mb-4">
                Through these experiences, I have gained confidence in my ability to tackle 
                complex problems, work collaboratively with others, and produce high-quality 
                results that meet industry standards.
              </p>
              <p>
                The skills and knowledge demonstrated in these samples form the foundation 
                for my continued professional development and career readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
