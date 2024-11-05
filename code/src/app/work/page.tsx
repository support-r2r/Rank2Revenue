// pages/Work.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Work: React.FC = () => {
  const projectData = [
    {
      title: "Project Alpha",
      tags: ["design", "development"],
      description: "A comprehensive branding project for a tech startup.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      title: "Project Beta",
      tags: ["marketing", "SEO"],
      description: "An SEO optimization project for an e-commerce site.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      title: "Project Gamma",
      tags: ["web design", "UI/UX"],
      description: "A responsive web design for a healthcare provider.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "View Project",
      buttonLink: "#",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero
        title="Our Work"
        subtitle="Recent Projects"
        description="Explore a selection of our recent projects that showcase our expertise across design, development, and marketing."
        primaryButtonText="Contact Us"
        primaryButtonLink="#contact"
        secondaryButtonText="See All Projects"
        secondaryButtonLink="#projects"
      />

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

      <Footer />
    </div>
  );
};

export default Work;
