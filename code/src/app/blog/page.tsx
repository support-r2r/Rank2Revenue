"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogThumbnails from "../components/BlogThumbnails"; // Import the BlogThumbnails component
import Footer from "../components/Footer";
import { CTA } from "../components/CTA";

const Blog: React.FC = () => {
  const blogData = [
    {
      href: "#",
      title: "Understanding SEO Fundamentals",
      readTime: "5 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Top 5 Web Design Trends in 2024",
      readTime: "7 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Boost Your Brand with Social Media",
      readTime: "6 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Mastering Responsive Design",
      readTime: "8 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Creating Engaging Content for Your Audience",
      readTime: "10 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "How to Optimize Website Speed",
      readTime: "4 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "Effective Email Marketing Strategies",
      readTime: "9 min",
      src: "https://via.placeholder.com/400x300",
    },
    {
      href: "#",
      title: "The Importance of User Experience (UX) Design",
      readTime: "7 min",
      src: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Updated Hero Component with Props */}
      <Hero
        title="Our Blog"
        subtitle="Insights, Tips, and the Latest in Digital Marketing"
        description="Stay updated with the latest trends and strategies in digital marketing. From SEO to web design, our blog covers everything you need to boost your brand."
        primaryButtonText="Subscribe"
        primaryButtonLink="#subscribe"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        glowingChipText="Discover New Ideas 💡"
      />

      {/* Blog Thumbnails */}
      <div className="py-12">
        <BlogThumbnails cards={blogData} />
      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default Blog;
