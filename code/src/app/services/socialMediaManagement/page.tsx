"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Social Media Management"
        subtitle="Engage Your Audience"
        description="Enhance your social media presence with regular posts, targeted audience engagement, and brand-optimized profiles on platforms like Facebook and Instagram."
        primaryButtonText="Learn More"
        primaryButtonLink="#"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="#"
      />
      <Footer />
    </div>
  );
};

export default Page;
