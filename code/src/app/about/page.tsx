// pages/About.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="About Us"
        subtitle="Who We Are"
        description="We’re a passionate team dedicated to providing exceptional digital solutions. Our mission is to empower businesses with the tools they need to succeed online."
        primaryButtonText="Contact Us"
        primaryButtonLink="#contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="#services"
        imageUrl="/services.jpeg" // Using a professional team image
      />

      <div className="container mx-auto px-6 py-16">
        {/* Mission Section */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Mission
        </h2>
        <p className="text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Our mission is to help businesses achieve their goals through innovative digital solutions. We believe in a client-first approach, creating tailored strategies that are as unique as our clients. With expertise in web development, SEO, and digital marketing, we’re here to turn your vision into reality.
        </p>

        {/* Team Section */}
        {/* Meet the Team */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
