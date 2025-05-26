import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-xl font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-white hover:text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Adithya Gnanasundar
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-300 hover:text-white'
                } ${
                  location.pathname === item.path 
                    ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full' 
                    : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
