'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Hide navbar on scroll down
        setIsVisible(false);
      } else {
        // Show navbar on scroll up
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-6 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative items-center">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <Link href="/" className="relative flex items-center gap-3">
              <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
                <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45"></span>
                <span className="absolute w-2 h-2 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              </div>
              <div className="inline-flex text-lg font-semibold text-white">
                Rank2Revenue
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow justify-center items-center">
            <ul className="flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-white w-full lg:justify-center lg:items-center">
              <li>
                <Link
                  href="/"
                  className={`duration-300 font-medium ease-linear py-3 ${
                    isActive('/') ? 'text-blue-300' : 'hover:text-blue-300'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`duration-300 font-medium ease-linear py-3 ${
                    isActive('/services') ? 'text-blue-300' : 'hover:text-blue-300'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`duration-300 font-medium ease-linear py-3 ${
                    isActive('/work') ? 'text-blue-300' : 'hover:text-blue-300'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`duration-300 font-medium ease-linear py-3 ${
                    isActive('/about') ? 'text-blue-300' : 'hover:text-blue-300'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`duration-300 font-medium ease-linear py-3 ${
                    isActive('/blog') ? 'text-blue-300' : 'hover:text-blue-300'
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="lg:min-w-max flex items-center">
            <Link
              href="/contact"
              className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-white hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-white"
            >
              <span className="relative z-10 text-white">Contact</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
