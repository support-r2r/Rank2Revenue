"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
  const featuredImage = "https://i.imgur.com/x6VxL8i.png"; // ✅ You can swap this with a more legal-themed image
  const pageUrl = "https://rank2revenue.com.au/terms-of-use"; // ✅ Replace with actual URL

  return (
    <div>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Terms of Use | Rank2Revenue</title>
        <meta
          name="description"
          content="Review the Terms of Use for Rank2Revenue. Learn about user responsibilities, legal limitations, intellectual property, and more."
        />

        {/* ✅ Open Graph / Social Sharing */}
        <meta property="og:title" content="Terms of Use | Rank2Revenue" />
        <meta property="og:description" content="Understand the terms and conditions for using Rank2Revenue’s services and website." />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Use | Rank2Revenue" />
        <meta name="twitter:description" content="Review the legal terms and responsibilities for using Rank2Revenue." />
        <meta name="twitter:image" content={featuredImage} />
      </Head>

      {/* ✅ Page Content */}
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="text-gray-700 mb-4">
          These Terms of Use govern your use of the Rank2Revenue website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not access or use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing or using our website, you confirm that you accept these terms and agree to comply with them. If you do not agree to these terms, you must not use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property Rights</h2>
        <p className="text-gray-700">
          Unless otherwise stated, Rank2Revenue and/or its licensors own the intellectual property rights for all content on this website. All intellectual property rights are reserved. You may access content from our website for your personal use, subject to restrictions set in these terms.
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>You must not republish material from our website without explicit permission.</li>
          <li>You must not sell, rent, or sublicense material from our website.</li>
          <li>You must not reproduce, duplicate, or copy material from our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Conduct</h2>
        <p className="text-gray-700">
          When using our website, you agree to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Use the website only for lawful purposes.</li>
          <li>Not use the website in a way that could harm, disable, or impair it.</li>
          <li>Not engage in any unauthorized access or hacking attempts.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-700">
          Rank2Revenue will not be held responsible for any loss or damage arising from your use of this website, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Direct, indirect, or consequential loss or damage.</li>
          <li>Any loss of profit, revenue, or data.</li>
          <li>Loss or damage resulting from errors, interruptions, or delays in service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites. These links are provided for your convenience, but we are not responsible for the content or practices of these third-party websites. We encourage you to review the terms and privacy policies of any third-party websites you visit.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to These Terms</h2>
        <p className="text-gray-700">
          Rank2Revenue reserves the right to update or modify these Terms of Use at any time without prior notice. Any changes will be effective immediately upon posting. Your continued use of the website after any changes constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Governing Law</h2>
        <p className="text-gray-700">
          These terms are governed by and construed in accordance with the laws of your jurisdiction, and you agree to submit to the exclusive jurisdiction of the courts in your location for any disputes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms of Use, please contact us:
        </p>
        <p className="text-gray-700">Email: contact@rank2revenue.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
