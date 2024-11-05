'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Hide navbar on scroll down
        setIsVisible(false);
      } else {
        // Show navbar on scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-gray-50 border-b shadow-md fixed top-0 left-0 z-10 transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-semibold text-gray-800">
            Rank2Revenue
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-gray-700">
          <Link href="/" className={isActive('/') ? 'text-indigo-600 font-bold' : 'hover:text-gray-900 font-medium'}>
            Home
          </Link>
          <Link href="/services" className={isActive('/services') ? 'text-indigo-600 font-bold' : 'hover:text-gray-900 font-medium'}>
            Services
          </Link>
          <Link href="/work" className={isActive('/work') ? 'text-indigo-600 font-bold' : 'hover:text-gray-900 font-medium'}>
            Work
          </Link>
          <Link href="/about" className={isActive('/about') ? 'text-indigo-600 font-bold' : 'hover:text-gray-900 font-medium'}>
            About Us
          </Link>
          <Link href="/blog" className={isActive('/blog') ? 'text-indigo-600 font-bold' : 'hover:text-gray-900 font-medium'}>
            Blog
          </Link>
        </div>

        {/* Right - Contact Button */}
        <div className="flex items-center">
          <Link href="/contact" className="btn bg-indigo-600/95 text-white transition-colors hover:bg-indigo-700 px-6 py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
