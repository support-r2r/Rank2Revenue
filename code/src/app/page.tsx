"use client";

import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import CodeBeams from "./components/coolbeam";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import OurSkills from "./components/OurSkills";
import { CTA } from "./components/CTA";
import FAQ from "./components/FAQ";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section with Updated Props */}
      <Hero
        title="Welcome to Our Digital World"
        subtitle="Where Innovation Meets Excellence"
        description="Discover how we leverage technology and creative solutions to transform businesses. From web development to digital marketing, we craft experiences that engage and inspire."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        glowingChipText="Empowering Your Future 🚀"
      />

      {/* About Section */}
      <AboutSection />

      {/* Statistics Section */}
      <Stats />

      {/* Code Beams Section */}
      <CodeBeams />

      {/* Our Skills Section */}
      <OurSkills />

      {/* FAQ Section */}
      <FAQ />

      {/* Call-to-Action Section */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
