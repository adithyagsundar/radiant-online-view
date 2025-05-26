import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  const portfolioSections = [
    { name: 'About', path: '/about', description: 'Personal Growth & Introduction' },
    { name: 'Resume', path: '/resume', description: 'Professional Development' },
    { name: 'Work', path: '/work', description: 'CTE Work Samples' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute top-0 inset-x-0 h-screen pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-80 -left-20 w-80 h-80 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Adithya <span className="font-bold text-white">Gnanasundar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
              CTE Portfolio
            </p>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Welcome to my Career and Technical Education portfolio showcasing my professional development, 
              work samples, and personal growth journey.
            </p>

            {/* Quote Section */}
            <div className="mt-12 mb-12 text-center">
              <p className="text-xl font-semibold text-gray-50 italic mb-2">
                "The people who are crazy enough to think they can change the world are the ones who do."
              </p>
              <p className="text-md text-gray-200">- Steve Jobs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {portfolioSections.map((section, index) => (
                <Link
                  key={section.name}
                  to={section.path}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-purple-600 hover:shadow-purple-500/30"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {section.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
