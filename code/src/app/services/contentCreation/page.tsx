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
        title="Content Creation"
        subtitle="Captivating and Engaging Content"
        description="Our team crafts high-quality content and visuals to attract and engage your target audience, including blog posts, social media graphics, and more."
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
