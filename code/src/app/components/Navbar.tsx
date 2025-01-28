"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  // Tawk.to script injection
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67985a443a8427326075a0a5/1iili17o3";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  // Scroll behavior to hide/show navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
    >
      <div className="mx-auto lg:max-w-7xl w-full px-4 sm:px-6 md:px-12">
        <nav className="flex justify-between items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block lg:hidden text-black text-2xl"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <FiMenu />
            </motion.button>
            <Link href="/">
              <Image
                src="/rank2Revnue.png"
                alt="Rank2Revenue Logo"
                width={80}
                height={30}
                priority
                className="h-auto w-[25px] md:w-[40px] lg:w-[60px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-6 text-black font-medium">
            <li>
              <Link
                href="/"
                className={`hover:text-blue-600 ${
                  isActive("/") ? "text-blue-600" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`hover:text-blue-600 ${
                  isActive("/services") ? "text-blue-600" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={`hover:text-blue-600 ${
                  isActive("/work") ? "text-blue-600" : ""
                }`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-blue-600 ${
                  isActive("/about") ? "text-blue-600" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`hover:text-blue-600 ${
                  isActive("/blog") ? "text-blue-600" : ""
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden lg:block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden mt-4 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6 text-black font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-600 ${
                  isActive("/") ? "text-blue-600" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-600 ${
                  isActive("/services") ? "text-blue-600" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-600 ${
                  isActive("/work") ? "text-blue-600" : ""
                }`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-600 ${
                  isActive("/about") ? "text-blue-600" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-600 ${
                  isActive("/blog") ? "text-blue-600" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
