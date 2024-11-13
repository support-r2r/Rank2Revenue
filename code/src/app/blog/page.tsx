// pages/Blog.tsx
"use client";
import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { BlogThumbnails } from '../components/BlogThumbnails';

const Blog: React.FC = () => {
  const blogData = [
    {
      href: "#",
      title: "Understanding SEO Fundamentals",
      readTime: "5 min read",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Top 5 Web Design Trends in 2024",
      readTime: "7 min read",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Boost Your Brand with Social Media",
      readTime: "6 min read",
      src: "https://via.placeholder.com/400x300",
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
        imageUrl="https://images.unsplash.com/photo-1544717305-2782549b5136?fit=crop&w=800&q=80" // Updated with a new image URL
      />

      <div className="p-8 space-y-8" id="articles">
        <BlogThumbnails cards={blogData} />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
