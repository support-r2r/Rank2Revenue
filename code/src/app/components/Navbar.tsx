import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-50 border-b shadow-md fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-screen-2xl mx-auto">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-gray-800">Rank2Revenue</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-gray-700">
          <a href="/" className="hover:text-gray-900 font-medium">Home</a>
          <a href="/services" className="hover:text-gray-900 font-medium">Services</a>
          <a href="/work" className="hover:text-gray-900 font-medium">Work</a>
          <a href="/about" className="hover:text-gray-900 font-medium">About us</a>
          <a href="/blog" className="hover:text-gray-900 font-medium">Blog</a>
        </div>

        {/* Right - Contact Button */}
        <div className="flex items-center">
          <a href="/contact" className="btn bg-indigo-600/95 text-white transition-colors hover:bg-indigo-700 px-6 py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
