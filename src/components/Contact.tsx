
import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, feel free to reach out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                <p className="text-orange-600 hover:underline cursor-pointer">hello@johndoe.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Social</h3>
                <div className="space-y-1">
                  <p className="text-amber-600 hover:underline cursor-pointer">LinkedIn: /in/johndoe</p>
                  <p className="text-amber-600 hover:underline cursor-pointer">GitHub: @johndoe</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-500">© 2024 John Doe. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
