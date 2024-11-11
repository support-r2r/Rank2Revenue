"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "../../components/ServicesContent";
import { CTA } from "../../components/CTA";
import ServiceNavigation from "../../components/ServiceNavigation";

const contentCreationData = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
    subheading: "Engaging Content",
    heading: "Captivate Your Audience",
    description:
      "Our content creation services are designed to engage your audience with high-quality, relevant content that resonates and inspires action.",
    buttonText: "Discover More",
    extraText: "Content Creation",
    href: "/contact",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1920&q=80",
    subheading: "Strategic Storytelling",
    heading: "Tell Your Brand's Story",
    description:
      "We help you craft compelling narratives that showcase your brand's unique value and connect with your audience on a deeper level.",
    buttonText: "Start Telling Your Story",
    extraText: "Storytelling",
    href: "/contact",
  },
];

const ContentCreation = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent
        title="Content Creation"
        contentData={contentCreationData}
      />
      <ServiceNavigation
        previousService={{
          name: "Social Media Management",
          link: "/services/socialMediaManagement",
        }}
        nextService={{
          name: "SEO Optimization",
          link: "/services/seoOptimization",
        }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default ContentCreation;
