// pages/Blog.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Blog: React.FC = () => {
  const blogData = [
    {
      title: "Understanding SEO Fundamentals",
      tags: ["SEO", "Marketing"],
      description: "A beginner's guide to SEO and how it can improve your online presence.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      title: "Top 5 Web Design Trends in 2024",
      tags: ["Design", "Trends"],
      description: "Explore the latest trends in web design and how they can enhance user experience.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      title: "Boost Your Brand with Social Media",
      tags: ["Branding", "Social Media"],
      description: "How to leverage social media platforms to grow your brand.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "Read More",
      buttonLink: "#",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero
        title="Our Blog"
        subtitle="Insights and Updates"
        description="Stay up-to-date with the latest trends, tips, and news in the world of digital marketing, design, and development."
        primaryButtonText="Subscribe"
        primaryButtonLink="#subscribe"
        secondaryButtonText="View All Articles"
        secondaryButtonLink="#articles"
      />

      <div className="p-8 space-y-8" id="articles">
        {blogData.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            tags={post.tags}
            description={post.description}
            imageUrl={post.imageUrl}
            buttonText={post.buttonText}
            buttonLink={post.buttonLink}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
