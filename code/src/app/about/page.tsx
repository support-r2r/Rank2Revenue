// pages/About.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Chief Designer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Williams",
    role: "Marketing Specialist",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Tom Brown",
    role: "Content Strategist",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    imageUrl: "https://via.placeholder.com/150",
  },
];

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
        <h2 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
