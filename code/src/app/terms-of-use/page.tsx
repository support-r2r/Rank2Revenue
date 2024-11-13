"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="text-gray-700">
          These terms and conditions outline the rules and regulations for the use of Rank2Revenue&apos;s website. By accessing this website, you accept these terms in full. If you disagree with any part of these terms, please do not use our website.
        </p>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
