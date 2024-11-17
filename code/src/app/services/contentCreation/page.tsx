"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";
import TitleComponent from "../../components/TitleComponent";

const contentCreationData = [
  {
    label: "Blog Writing",
    stepNumber: "01",
    title: "Engage with High-Quality Content",
    description:
      "Our blog writing services focus on creating engaging, SEO-optimized content to attract and retain your target audience.",
    buttonText: "Explore",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Social Media Content",
    stepNumber: "02",
    title: "Boost Your Social Presence",
    description:
      "We develop creative and engaging social media content tailored to your brand’s voice and audience.",
    buttonText: "Boost Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "Video Production",
    stepNumber: "03",
    title: "Tell Your Story Visually",
    description:
      "Our video production services bring your brand’s story to life with captivating visuals and storytelling.",
    buttonText: "Create Video",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Infographics",
    stepNumber: "04",
    title: "Simplify Complex Ideas",
    description:
      "We design visually appealing infographics that make complex information easy to understand and share.",
    buttonText: "Design Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "Copywriting",
    stepNumber: "05",
    title: "Words That Convert",
    description:
      "Our copywriting services deliver persuasive and compelling content that drives your audience to take action.",
    buttonText: "Get Copy",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
];

const ContentCreation = () => {
  return (
    <div>
      <Navbar />
      <TitleComponent
        title="Content Creation Services"
        subtitle="Craft Engaging and Impactful Content"
      />
      <ContentPages contentData={contentCreationData} />
      <ServiceNavigation
        previousService={{
          name: "Area Marketing",
          link: "/services/areaMarketing",
        }}
        nextService={{
          name: "Email Marketing",
          link: "/services/emailMarketing",
        }}
      />
      <Footer />
    </div>
  );
};

export default ContentCreation;
