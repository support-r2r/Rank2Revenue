"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-700">
          Our website uses cookies to improve your experience. This cookie policy explains what cookies are, how we use them, and how you can control them.
        </p>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
