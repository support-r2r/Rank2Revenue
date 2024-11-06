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
        title="SEO Optimization"
        subtitle="Boost Your Online Visibility"
        description="Improve your website's visibility on search engines with our SEO services, focusing on targeted keywords and local or national reach to drive more organic traffic."
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
