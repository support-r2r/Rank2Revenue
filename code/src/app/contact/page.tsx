"use client";

import React from "react";
import ContactForm from "../components/contactFrom"; // Corrected the import path
import Navbar from "../components/Navbar";

const ContactPage: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white text-black flex flex-col items-center justify-center p-6">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
   

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
