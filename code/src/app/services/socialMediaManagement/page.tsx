"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";
import TitleComponent from "../../components/TitleComponent";

const socialMediaManagementData = [
  {
    label: "Engage & Connect",
    stepNumber: "01",
    title: "Social Media Management",
    description:
      "We manage your social media platforms to ensure consistent branding and engaging content that keeps your audience interested and connected to your business.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Ad Campaigns",
    stepNumber: "02",
    title: "Maximize Your ROI",
    description:
      "Our experts create and manage targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to boost engagement and drive conversions.",
    buttonText: "Start Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "Content Creation",
    stepNumber: "03",
    title: "Create Impactful Content",
    description:
      "We develop high-quality, creative content tailored to your brand's voice and audience to maximize engagement and grow your social media presence.",
    buttonText: "Create Content",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Analytics & Reporting",
    stepNumber: "04",
    title: "Track Your Success",
    description:
      "Gain valuable insights with our comprehensive analytics and reporting, helping you understand performance and make data-driven decisions.",
    buttonText: "View Insights",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "Community Management",
    stepNumber: "05",
    title: "Build a Loyal Community",
    description:
      "We engage with your audience through active community management, responding to comments, and fostering meaningful interactions to grow brand loyalty.",
    buttonText: "Engage Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
];

const SocialMediaManagement = () => {
  return (
    <div>
      <Navbar />
      <TitleComponent
        title="Social Media Management"
        subtitle="Engage, Connect, and Grow Your Brand"
      />
      <ContentPages contentData={socialMediaManagementData} />
      <ServiceNavigation
        previousService={{
          name: "SEO Optimization",
          link: "/services/seoOptimization",
        }}
        nextService={{
          name: "Website Development",
          link: "/services/websiteDevelopment",
        }}
      />
      <Footer />
    </div>
  );
};

export default SocialMediaManagement;
