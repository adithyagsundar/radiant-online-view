
import React from 'react';
import Navigation from '../components/Navigation';
import { User, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">About Me</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-gray-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Letter of Introduction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I am a dedicated CTE student passionate about technology and innovation. 
                    My journey in Career and Technical Education has shaped my professional 
                    development and prepared me for future career opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills & Interests</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through comprehensive self-assessment, I have identified my core strengths 
                    in problem-solving, technical skills, and collaborative teamwork. These 
                    assessments guide my continued professional development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-500 to-slate-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    My CTE experience has fostered significant personal and professional growth, 
                    developing both technical competencies and essential soft skills needed 
                    for career success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative w-full h-96 bg-white rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop&crop=center"
                  alt="Professional workspace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Letter of Introduction</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Dear Future Employer,
              </p>
              <p className="mb-4">
                I am writing to introduce myself as a motivated and skilled CTE student ready to contribute 
                to your organization. Through my comprehensive Career and Technical Education program, I have 
                developed both technical expertise and professional competencies that align with today's 
                workforce demands.
              </p>
              <p className="mb-4">
                My educational journey has equipped me with hands-on experience in [specific CTE field], 
                where I have demonstrated proficiency in [key skills/technologies]. Beyond technical skills, 
                I have cultivated strong problem-solving abilities, effective communication, and collaborative 
                teamwork through project-based learning and real-world applications.
              </p>
              <p className="mb-4">
                I am particularly drawn to opportunities that allow me to apply my technical knowledge while 
                continuing to learn and grow professionally. My portfolio demonstrates my commitment to 
                excellence and showcases the quality of work I consistently deliver.
              </p>
              <p className="mb-4">
                Thank you for considering my application. I look forward to discussing how my skills and 
                enthusiasm can contribute to your team's success.
              </p>
              <p className="mt-6">
                Sincerely,<br />
                Adithya Gnanasundar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
