// pages/contact.tsx
'use client';
import React from 'react';
import ContactForm from '../components/contactFrom'; // Adjust the import path based on your project structure

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
