"use client";

import React from "react";
import ContactForm from "../components/contactFrom"; // Corrected the import path
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center p-6">
      {/* Navbar */}
      <Navbar />

      {/* Page Header (Optional) */}
      {/* Add your header here if needed */}

      {/* Contact Form */}
      <ContactForm />
      
      <Footer/>

    </div>
  );
};

export default ContactPage;
