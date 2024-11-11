"use client";

import React from "react";
import ContactForm from "../components/contactFrom"; // Corrected the import path
import Navbar from "../components/Navbar";

const ContactPage: React.FC = () => {
  return (
    <div
      className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-400">
          We&apos;d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
