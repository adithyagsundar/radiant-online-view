
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
    { name: 'Goals', path: '/goals' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'LinkedIn', path: '/linkedin' },
    { name: 'Recognition', path: '/recognition' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-gray-800'
          }`}>
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-slate-600' 
                    : 'text-gray-800 hover:text-slate-600'
                } ${
                  location.pathname === item.path ? 'text-slate-600 font-medium' : ''
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
