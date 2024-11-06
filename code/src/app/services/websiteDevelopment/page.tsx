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
        title="Website Development"
        subtitle="Building Your Online Presence"
        description="We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features."
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
