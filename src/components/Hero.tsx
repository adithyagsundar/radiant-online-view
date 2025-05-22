
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            John <span className="font-normal">Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Creative Developer & Designer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with clean code and thoughtful design. 
            Passionate about creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
