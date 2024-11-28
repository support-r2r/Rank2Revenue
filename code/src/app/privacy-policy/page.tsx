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
        <p className="text-gray-700 mb-4">
          This Privacy Policy describes Rank2Revenue (hereinafter referred to as &quot;the Company&quot;) policies and procedures on the collection, use, and disclosure of the information provided by users and visitors of the website (together referred to as &quot;Users&quot;). The Company is committed to ensuring that your privacy is protected. By accessing and using our website, you agree to the terms outlined in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Interpretation</h2>
        <p className="text-gray-700">
          In this Privacy Policy, references to &quot;You&quot;, &quot;Your&quot;, and &quot;User&quot; shall mean the end user accessing the Website or the Services. References to &quot;We&quot;, &quot;Us&quot;, and &quot;Our&quot; shall mean Rank2Revenue and its affiliates or partners.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information Collection and Use</h2>
        <p className="text-gray-700">
          We collect several types of information for various purposes to provide and improve our services.
        </p>

        <h3 className="text-xl font-medium mt-4">Types of Data Collected</h3>
        <p className="text-gray-700">
          <strong>Personal Data:</strong> While using our services, we may ask you to provide certain personally identifiable information. This may include, but is not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Cookies and usage data</li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Usage Data:</strong> We may also collect information about how the service is accessed and used. This may include:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Your device&apos;s Internet Protocol address (IP address)</li>
          <li>Browser type and version</li>
          <li>Pages you visit on our website</li>
          <li>Time and date of your visit</li>
          <li>Time spent on pages</li>
          <li>Unique device identifiers</li>
        </ul>

        <h3 className="text-xl font-medium mt-4">Tracking &amp; Cookies Data</h3>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to monitor activity on our website and hold certain information. You can instruct your browser to refuse cookies; however, some features of the website may be unavailable without them.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Data</h2>
        <p className="text-gray-700">
          Rank2Revenue uses the collected data for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To provide customer care and support</li>
          <li>To analyze and improve the services</li>
          <li>To monitor the usage of the services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Transfer</h2>
        <p className="text-gray-700">
          Your information, including Personal Data, may be transferred to and maintained on servers located outside your state, province, or country. By providing us with your information, you consent to this transfer.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Disclosure of Data</h2>
        <p className="text-gray-700">
          Rank2Revenue may disclose your Personal Data in the good faith belief that such action is necessary to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of Rank2Revenue</li>
          <li>Prevent or investigate potential wrongdoing</li>
          <li>Protect the safety of users or the public</li>
          <li>Protect against legal liability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Security of Data</h2>
        <p className="text-gray-700">
          We take reasonable steps to ensure your data is secure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Service Providers</h2>
        <p className="text-gray-700">
          We may employ third-party companies and individuals to facilitate our services, provide the services on our behalf, or assist us in analyzing how our services are used. These third parties are obligated not to disclose or use your Personal Data for any other purpose.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Children&apos;s Privacy</h2>
        <p className="text-gray-700">
          Our services do not address anyone under the age of 18. If you believe your child has provided us with Personal Data, please contact us. We will take steps to remove that information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with the updated &quot;effective date.&quot;
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700">Email: contact@rank2revenue.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
