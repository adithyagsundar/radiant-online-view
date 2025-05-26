import React from 'react';
import Navigation from '../components/Navigation';
import { User, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">About Me</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto"></div>
          </div>

          <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-700 mb-16 hover:border-purple-600 hover:shadow-purple-500/30 transition-all duration-300">
            <div className="text-gray-200 leading-relaxed">
              <p className="mb-4">
                My name is Adithya Gnanasundar; I am a Junior attending Dublin High School, located in the Bay Area. In the future, I aspire to become a project manager at a large-scale tech company.
              </p>
              <p className="mb-4">
                As an innovator, a variety of traits is needed. However, the three most important is being adaptable, accurate, and innovative. Shown through my experiences, I have already demonstrated these traits to large extents.
              </p>
              <p className="mb-4">
                In high school, I have enrolled in courses centered in Computer Science and Business, and have shown academic excellence for six semesters. I have also pursued projects outside of school, as shown through some of my experiences and accomplishments. Throughout these experiences, I have learned to become more organized, and more proficient as I prepare to enter the professional world.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-700 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Letter of Introduction</h2>
            <div className="text-gray-200 leading-relaxed">
              <p className="mb-4">
                My name is Adithya Gnanasundar, and I am from the San Francisco Bay Area, CA. I am fortunate enough to attend Dublin High School, a top-ranked public school, which has furthered my academic interests, driven my competitive nature, and introduced me to a diverse range of new perspectives. Additionally, my close proximity to Silicon Valley, my school's established engineering and business academies, and my parents' careers have all fueled my goals and aspirations heavily.
              </p>
              <p className="mb-4">
                In terms of my career goals, I have a strong interest in technology and business, while also exploring finance and venture capital. I plan to major in computer science, data science, business, finance, or related fields at a four-year public or private university. My long-term goal is to become a project or product manager at a large-scale technology company. Additionally, I have a strong interest in startups, so I am open to going down that path as well. I want to be in a position where my work will be able to make a positive impact in the world. I also want to have time to explore my interests and work on personal growth.
              </p>
              <p className="mb-4">
                I have a deep commitment and passion to my work. All of the work that I submit is to the best of my ability and I always work in a timely manner to ensure that I meet deadlines. Additionally, I am very collaborative with others in a work environment, where I consider all perspectives when making key decisions. Additionally, through my experiences I have gained leadership skills, which is necessary for a role in management.
              </p>
              <p className="mb-4">
                Throughout my academic career, I have gained a variety of professional skills. For example, I am a member of my school's engineering academy, where I gained technical skills in Python, Java, HTML, and C++. To this end, I have had AI research intern positions with professors at UIUC and UCSC, showcasing my technical knowledge and passion for AI research. In addition, I am an avid participant in science fairs, most notably placing 3rd in the software category at the Alameda County Science and Engineering Fair. Additionally, in my school's DECA chapter, I have gained a variety of interpersonal, management, and collaboration skills. Most notably, I have attended DECA Internationals, one of the most prestigious business high school business competitions, twice in my two years in DECA. This showcases my aptitude to work well with others, present ideas, and lead a project.
              </p>
              <p className="mb-4">
                Entering a career in technology, business, or finance can be competitive. However, I believe that I would be able to use my skills and experiences in high school to leverage myself toward an occupation that I truly enjoy. Attending top-ranked schools for business and tech such as Stanford, UPenn, MIT, or NYU will give me the prior knowledge to make great career choices.
              </p>
              <p className="mb-4">
                Thank you so much for your time and consideration in reading my letter of introduction. I hope that my background, skills, and interests align with your company's goals, and that you will consider me for a position in your company.
              </p>
              <p className="mt-6">
                Sincerely,<br />
                Adithya Gnanasundar
              </p>
            </div>
          </div>

          <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-700 hover:border-purple-600 hover:shadow-purple-500/30 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-6">SMART Goals</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Short-Term Personal Goal</h3>
                <p className="text-gray-200 leading-relaxed">
                  I will exercise for 20 minutes every day for the next 30 days to build a consistent fitness habit and improve my physical health.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Long-Term Personal Goal</h3>
                <p className="text-gray-200 leading-relaxed">
                  I will own at least 5 properties by the end of 2030 by consistently investing in real estate opportunities and managing my finances wisely.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Short-Term Career Goal</h3>
                <p className="text-gray-200 leading-relaxed">
                  I will get an internship at a top 500 tech company by summer 2025 by applying to multiple roles, refining my resume, and preparing for interviews.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Long-Term Career Goal</h3>
                <p className="text-gray-200 leading-relaxed">
                  I will complete a master's degree by the end of 2032 by applying to graduate school, enrolling in a program, and consistently working through the coursework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
