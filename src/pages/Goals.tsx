
import React from 'react';
import Navigation from '../components/Navigation';
import { Target, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const Goals = () => {
  const smartGoals = [
    {
      title: "Complete Industry Certification",
      timeframe: "By End of School Year",
      description: "Obtain relevant industry certification in my CTE field to enhance employability",
      specific: "Complete [Specific Certification Name] certification",
      measurable: "Pass certification exam with 85% or higher",
      achievable: "Study 2 hours per week, attend prep sessions",
      relevant: "Directly aligns with career pathway",
      timeBound: "Complete by June 2024"
    },
    {
      title: "Develop Professional Network",
      timeframe: "Ongoing",
      description: "Build meaningful professional connections in my chosen field",
      specific: "Connect with 10 industry professionals",
      measurable: "Attend 3 networking events, join professional organization",
      achievable: "Leverage school connections and local events",
      relevant: "Essential for career advancement",
      timeBound: "Achieve by graduation"
    },
    {
      title: "Complete Internship Program",
      timeframe: "Next Summer",
      description: "Gain real-world experience through hands-on internship",
      specific: "Secure internship in my CTE field",
      measurable: "Complete 200+ hours of work experience",
      achievable: "Apply to 5+ programs, utilize career services",
      relevant: "Provides practical experience",
      timeBound: "Summer 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">SMART Goals</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My strategic goals are designed using the SMART framework to ensure they are 
              Specific, Measurable, Achievable, Relevant, and Time-bound.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {smartGoals.map((goal, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{goal.title}</h3>
                    <div className="flex items-center text-sm text-indigo-600 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {goal.timeframe}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{goal.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>S:</strong> {goal.specific}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>M:</strong> {goal.measurable}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>A:</strong> {goal.achievable}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>R:</strong> {goal.relevant}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>T:</strong> {goal.timeBound}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Goal Setting Reflection</h2>
            </div>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Setting SMART goals has been instrumental in my professional development journey. 
                Each goal is carefully crafted to challenge me while remaining achievable within 
                realistic timeframes.
              </p>
              <p className="mb-4">
                These goals align with my career pathway and provide clear milestones for measuring 
                progress. Regular review and adjustment ensure they remain relevant to my evolving 
                interests and industry demands.
              </p>
              <p>
                By maintaining focus on these strategic objectives, I am building a foundation for 
                long-term career success and continuous professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
