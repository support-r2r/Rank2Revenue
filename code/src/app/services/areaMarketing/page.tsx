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
        title="Area Marketing"
        subtitle="Local Strategies for Maximum Impact"
        description="We focus on hyper-local marketing efforts within a targeted radius around your business to attract customers from nearby areas and boost foot traffic."
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
