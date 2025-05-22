
import React from 'react';
import { Code, Briefcase, Users, Pencil } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern frameworks and technologies',
      items: ['React', 'TypeScript', 'Node.js', 'Python']
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Creating beautiful and intuitive user experiences',
      items: ['UI/UX', 'Figma', 'Adobe Creative Suite', 'Prototyping']
    },
    {
      icon: Briefcase,
      title: 'Strategy',
      description: 'Planning and executing digital solutions effectively',
      items: ['Project Management', 'Agile', 'Problem Solving', 'Analysis']
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
      items: ['Communication', 'Leadership', 'Mentoring', 'Client Relations']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <skill.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{skill.description}</p>
              <ul className="space-y-1">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
