
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            John <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            Creative Developer & Designer
          </p>
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Crafting beautiful digital experiences with clean code and thoughtful design. 
            Passionate about creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
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
