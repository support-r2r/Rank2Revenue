// pages/Work.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Work: React.FC = () => {
  const projectData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description: "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png",
      buttonText: "Visit Website",
      buttonLink: "https://cleardental.com.au",
    },
    {
      title: "Mazaj Restaurant",
      tags: ["Middle Eastern Cuisine", "Authentic", "Dining"],
      description: "Mazaj Restaurant provides an authentic Middle Eastern culinary experience, offering traditional dishes made with fresh ingredients and rich flavors. Enjoy a welcoming atmosphere with a focus on high-quality, flavorful food.",
      imageUrl: "/mazaj.png",
      buttonText: "Explore Menu",
      buttonLink: "https://mazaj.au",
    },
    {
      title: "Sandwich Lab",
      tags: ["Fast Food", "Gourmet Sandwiches", "Trendy"],
      description: "Sandwich Lab is a modern fast food outlet specializing in gourmet sandwiches, crafted with fresh and unique ingredients. Perfect for a quick, delicious meal that satisfies both taste and quality.",
      imageUrl: "/Sandwhich_lab.png",
      buttonText: "Order Now",
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
        imageUrl="/work.jpg" // Image representing creative or professional work
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