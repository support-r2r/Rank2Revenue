"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { CTA } from "../components/CTA";

const Work: React.FC = () => {
  const projectData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description:
        "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png", // Path to the image in the public directory
      buttonText: "Visit Website",
      buttonLink: "https://cleardental.com.au",
    },
    {
      title: "Mazaj Restaurant",
      tags: ["Middle Eastern Cuisine", "Authentic", "Dining"],
      description:
        "Mazaj Restaurant provides an authentic Middle Eastern culinary experience, offering traditional dishes made with fresh ingredients and rich flavors. Enjoy a welcoming atmosphere with a focus on high-quality, flavorful food.",
      imageUrl: "/mazaj.png",
      buttonText: "Explore Menu",
      buttonLink: "https://mazaj.au",
    },
    {
      title: "Sandwich Lab",
      tags: ["Fast Food", "Gourmet Sandwiches", "Trendy"],
      description:
        "Sandwich Lab is a modern fast food outlet specializing in gourmet sandwiches, crafted with fresh and unique ingredients. Perfect for a quick, delicious meal that satisfies both taste and quality.",
      imageUrl: "/Sandwhich_lab.png",
      buttonText: "Order Now",
      buttonLink: "#", // Update to actual URL if available
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Updated Hero Component with Props */}
      <Hero
        title="Our Projects"
        subtitle="A Showcase of Our Work"
        description="We take pride in our projects, which span across various industries, from healthcare to culinary arts. Explore our portfolio to see how we bring ideas to life with creativity and precision."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        glowingChipText="Showcasing Excellence"
      />

      {/* Projects Section */}
      <div className="p-8 space-y-8" id="projects">
        {projectData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            tags={project.tags}
            description={project.description}
            imageUrl={project.imageUrl}
            buttonText={project.buttonText}
            buttonLink={project.buttonLink}
          />
        ))}
      </div>

      <CTA />

      <Footer />
    </div>
  );
};

export default Work;
