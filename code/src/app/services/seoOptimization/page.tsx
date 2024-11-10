"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "@/app/components/ServicesContent";
import { CTA } from "@/app/components/CTA";
import ServiceNavigation from "@/app/components/ServiceNavigation";

const seoOptimizationData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
    subheading: "On-Page SEO",
    heading: "Boost Your Online Presence",
    description:
      "Our SEO optimization services are designed to improve your website’s visibility on search engines, helping you attract more organic traffic and potential customers.",
    buttonText: "Discover More",
    extraText: "SEO Optimization",
    href: "/contact",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1920&q=80",
    subheading: "Local SEO Services",
    heading: "Dominate Local Searches",
    description:
      "We optimize your website for local search results, ensuring that your business appears in front of the right people at the right time in your local area.",
    buttonText: "Learn More",
    extraText: "Local SEO",
    href: "/contact",
  },
];

const SEOOptimization = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent title="SEO Optimization" contentData={seoOptimizationData} />
      <ServiceNavigation
        previousService={{ name: "Website Development", link: "/services/websiteDevelopment" }}
        nextService={{ name: "Social Media Management", link: "/services/socialMediaManagement" }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default SEOOptimization;
