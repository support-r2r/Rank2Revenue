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
        <p className="text-gray-700 mb-4">
          This Cookie Policy explains how Rank2Revenue (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar tracking technologies on our website. By using our website, you agree to the use of cookies as outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
        <p className="text-gray-700">
          Cookies are small text files that are stored on your device when you visit a website. They allow the website to recognize your device and store information about your preferences or past actions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Types of Cookies We Use</h2>
        <p className="text-gray-700">
          We use the following types of cookies to enhance your browsing experience:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages are most visited.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies allow us to remember your preferences and settings to improve your experience.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These cookies help us analyze user behavior to improve our website and services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
        <p className="text-gray-700">
          Rank2Revenue uses cookies for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>To ensure the proper functioning of our website</li>
          <li>To analyze user behavior and improve the website</li>
          <li>To remember your preferences and provide a personalized experience</li>
          <li>To support marketing efforts and measure the effectiveness of campaigns</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Cookies</h2>
        <p className="text-gray-700">
          We may use third-party services, such as Google Analytics, that use cookies to collect information about website traffic and user behavior. These third parties may have their own privacy and cookie policies, which we encourage you to review.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Managing Cookies</h2>
        <p className="text-gray-700">
          You can control or disable cookies through your browser settings. However, please note that disabling cookies may impact the functionality of our website.
        </p>
        <p className="text-gray-700 mt-2">
          Most web browsers allow you to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>View what cookies are stored on your device</li>
          <li>Delete cookies from your device</li>
          <li>Block cookies from specific or all websites</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Cookie Policy</h2>
        <p className="text-gray-700">
          We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Cookie Policy, please contact us at:
        </p>
        <p className="text-gray-700">Email: contact@rank2revenue.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
