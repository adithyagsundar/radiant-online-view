
import React from 'react';
import { Code, Briefcase, Users, Pencil } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern frameworks and technologies',
      items: ['React', 'TypeScript', 'Node.js', 'Python'],
      color: 'orange'
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Creating beautiful and intuitive user experiences',
      items: ['UI/UX', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
      color: 'amber'
    },
    {
      icon: Briefcase,
      title: 'Strategy',
      description: 'Planning and executing digital solutions effectively',
      items: ['Project Management', 'Agile', 'Problem Solving', 'Analysis'],
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
      items: ['Communication', 'Leadership', 'Mentoring', 'Client Relations'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'orange': return { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'bg-orange-100 text-orange-600' };
      case 'amber': return { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'bg-amber-100 text-amber-600' };
      case 'yellow': return { bg: 'bg-yellow-50', text: 'text-yellow-600', icon: 'bg-yellow-100 text-yellow-600' };
      case 'red': return { bg: 'bg-red-50', text: 'text-red-600', icon: 'bg-red-100 text-red-600' };
      default: return { bg: 'bg-gray-50', text: 'text-gray-600', icon: 'bg-gray-100 text-gray-600' };
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            return (
              <div 
                key={index} 
                className={`${colors.bg} p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-6`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-medium ${colors.text} mb-3`}>{skill.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{skill.description}</p>
                <ul className="space-y-1">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
