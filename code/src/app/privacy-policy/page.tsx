"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700">
          Your privacy is important to us. This privacy policy explains what personal data we collect and how we use it. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
