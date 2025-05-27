import React from 'react';
import Navigation from '../components/Navigation';
import { Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Resume</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto"></div>
          </div>

          <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-700 hover:border-purple-600 hover:shadow-purple-500/30 transition-all duration-300">
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Adithya Gnanasundar</h2>
                <p className="text-gray-200">Dublin, CA | (925-577-2088) | (tnt.adithya@gmail.com)</p>
              </div>

              {/* Summary of Skills/Qualifications */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Professional Summary</h2>
                <p className="text-gray-200 leading-relaxed">
                  Hardworking and competent high school student with extensive knowledge across technology and business. Punctual and professional and driven to perform successfully as a part of a team.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <p className="text-gray-200 font-medium">• Business Development</p>
                  <p className="text-gray-200 font-medium">• Machine Learning</p>
                  <p className="text-gray-200 font-medium">• Data Analytics</p>
                  <p className="text-gray-200 font-medium">• Leadership</p>
                  <p className="text-gray-200 font-medium">• Team Collaboration</p>
                  <p className="text-gray-200 font-medium">• Project Management</p>
                </div>
              </div>

              {/* Experience/Work History */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Professional Experience</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-100">Machine Learning Research Intern</h3>
                      <p className="text-gray-200 italic">02/2024 - Present</p>
                    </div>
                    <p className="text-gray-200 font-medium">University of Illinois, Urbana-Champaign</p>
                    <p className="text-gray-200 italic">Under Professor Varun Chandrasekaran</p>
                    <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                      <li>Spearheaded novel research on "Machine Unlearning," enhancing security in large language models</li>
                      <li>Conducted comprehensive literature reviews on NLP and machine unlearning</li>
                      <li>Collaborated with 5 college-level researchers; paper pending publication</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-100">Machine Learning Research Intern</h3>
                      <p className="text-gray-200 italic">06/2024 - Present</p>
                    </div>
                    <p className="text-gray-200 font-medium">University of California, Santa Cruz</p>
                    <p className="text-gray-200 italic">Under Professor Leilani Gilpin</p>
                    <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                      <li>Implemented weekly tasks on LLMs, NLP, logic, and explainability</li>
                      <li>Deployed Kubernetes and Docker for GPU-intensive coding tasks</li>
                      <li>Developed logical layer integration using Prolog for LLMs</li>
                      <li>Proposed and initiated novel NLP explainability project</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-100">Business Development Intern</h3>
                      <p className="text-gray-200 italic">11/2023 - 02/2024</p>
                    </div>
                    <p className="text-gray-200 font-medium">JETSON</p>
                    <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                      <li>Led direct communication with growth leads of Jetson AI</li>
                      <li>Developed and implemented outreach strategy for high school entrepreneurship workshops</li>
                      <li>Organized and hosted workshop with 40+ attendees</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Education</h2>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-100">Dublin High School</h3>
                    <p className="text-gray-200 italic">Expected Graduation: 2026</p>
                  </div>
                  <p className="text-gray-200">Dublin, CA</p>
                  <p className="text-gray-200">GPA: 4.22/4.0 Weighted, 3.92/4.0 Unweighted</p>
                  <p className="text-gray-200 mt-1">AP Courses: Calculus AB, Calculus BC, Chemistry, CSP, English Lang, US History, World History</p>
                </div>
              </div>

              {/* Honors and Awards */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Awards & Recognition</h2>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>DECA California State CDC 2024: 2nd Place Integrated Marketing Campaign Service (IMCS)</li>
                  <li>3rd Place in Software Category Award at Alameda County Science and Engineering Fair</li>
                  <li>DECA California State CDC 2025: 4th Place in Entrepreneurship Team Decision Making (ETDM)</li>
                </ul>
              </div>

              {/* Activities/Community Service */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 border-b border-slate-700 pb-1">Activities & Community Service</h2>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>Marketing Volunteer at Amba Farmers Voice (Jan 2023 - May 2023)</li>
                  <li>Alameda County District 1 Intern and Volunteer (Jun 2023 - Jul 2024)</li>
                  <li>President's Volunteer Service Award (Jun 2023)</li>
                  <li>Inducted Member of National Honors Society (Oct 2023 - May 2024)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="mt-8 text-center">
            <a 
              href="https://www.linkedin.com/in/adithya-gnanasundar-b0825a260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-slate-200 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span>Connect with me on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
