
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer and designer with over 5 years of experience creating 
              digital solutions that combine functionality with beautiful design. I believe in 
              the power of simplicity and clean code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching new ideas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors duration-300">React</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm hover:bg-yellow-200 transition-colors duration-300">TypeScript</span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors duration-300">Node.js</span>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm hover:bg-amber-200 transition-colors duration-300">Design</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-full h-96 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop&crop=center"
                alt="Workspace"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
