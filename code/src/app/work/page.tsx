"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Work: React.FC = () => {
  const featuredImage = "https://i.imgur.com/llJOh6B.png"; // Hero/Portfolio-style image
  const pageUrl = "https://rank2revenue.com.au/work";

  const projectData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description:
        "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png",
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
      buttonLink: "#",
    },
    
    // Add more projects here
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projectData.length);
  };

  return (
    <div>
      {/* ✅ SEO */}
      <Head>
        <title>Our Work | Rank2Revenue Projects</title>
        <meta
          name="description"
          content="Explore a curated selection of client projects from Rank2Revenue across web development, design, branding, and digital marketing."
        />

        {/* ✅ Open Graph / Social */}
        <meta property="og:title" content="Our Work | Rank2Revenue Projects" />
        <meta property="og:description" content="View some of our latest digital projects for businesses in dental, food, and hospitality industries." />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | Rank2Revenue Projects" />
        <meta name="twitter:description" content="Explore our client projects and see how we deliver high-impact websites and marketing strategies." />
        <meta name="twitter:image" content={featuredImage} />
      </Head>

      {/* ✅ Main Content */}
      <Navbar />
      <Hero
        title="Our Work"
        subtitle="Recent Projects"
        description="Explore a selection of our recent projects that showcase our expertise across design, development, and marketing."
        primaryButtonText="Contact Us"
        primaryButtonLink="#contact"
        secondaryButtonText="See All Projects"
        secondaryButtonLink="#projects"
        imageUrl={featuredImage}
      />

      <div className="p-8 space-y-8" id="projects">
        {projectData.slice(0, visibleProjects).map((project, index) => (
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
        {visibleProjects < projectData.length && (
          <div className="text-center">
            <button
              onClick={showMoreProjects}
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Work;