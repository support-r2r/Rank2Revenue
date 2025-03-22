"use client";

import React from "react";
import ContactForm from "../components/contactFrom"; // Corrected the import path
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lottie from "lottie-react";


const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center p-6">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We’re here to help you grow your business. Contact us to learn more about our services and how we can create a custom solution for your brand."
        primaryButtonText="Get Started"
        primaryButtonLink="#contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        scrollTargetId="contact"

      />

      <div id="contact"></div>
      {/* Contact Form */}
      <ContactForm />
      
      <Footer/>

    </div>
  );
};

export default ContactPage;
