
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  const portfolioSections = [
    { name: 'About', path: '/about', description: 'Personal Growth & Introduction' },
    { name: 'Goals', path: '/goals', description: 'SMART Goals & Development' },
    { name: 'Resume', path: '/resume', description: 'Professional Development' },
    { name: 'Work', path: '/work', description: 'CTE Work Samples' },
    { name: 'LinkedIn', path: '/linkedin', description: 'Professional Profile' },
    { name: 'Recognition', path: '/recognition', description: 'Awards & Certificates' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="absolute top-0 inset-x-0 h-screen pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-80 -left-20 w-80 h-80 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 leading-tight">
              Adithya <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-gray-800">Gnanasundar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              CTE Portfolio
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Welcome to my Career and Technical Education portfolio showcasing my professional development, 
              work samples, and personal growth journey.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {portfolioSections.map((section, index) => (
                <Link
                  key={section.name}
                  to={section.path}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                    {section.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
