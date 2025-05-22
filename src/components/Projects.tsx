
import React from 'react';
import { Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      color: 'blue'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center',
      tags: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
      link: '#',
      color: 'purple'
    },
    {
      title: 'Portfolio Website',
      description: 'A clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&crop=center',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      link: '#',
      color: 'pink'
    }
  ];

  const getTagColor = (projectColor: string) => {
    switch(projectColor) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'pink': return 'bg-pink-100 text-pink-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-3 py-1 ${getTagColor(project.color)} text-sm rounded-full transition-all duration-300 hover:shadow-md`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
