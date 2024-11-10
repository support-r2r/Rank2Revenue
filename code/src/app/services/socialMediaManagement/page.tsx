"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "@/app/components/ServicesContent";
import { CTA } from "@/app/components/CTA";
import ServiceNavigation from "@/app/components/ServiceNavigation";

const socialMediaManagementData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1920&q=80",
    subheading: "Engage & Connect",
    heading: "Social Media Management",
    description:
      "We manage your social media platforms to ensure consistent branding and engaging content that keeps your audience interested and connected to your business.",
    buttonText: "Get Started",
    extraText: "Social Media Management",
    href: "/contact",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1920&q=80",
    subheading: "Ad Campaigns",
    heading: "Maximize Your ROI",
    description:
      "Our experts create and manage targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to boost engagement and drive conversions.",
    buttonText: "Start Now",
    extraText: "Social Media Ads",
    href: "/contact",
  },
];

const SocialMediaManagement = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent title="Social Media Management" contentData={socialMediaManagementData} />
      <ServiceNavigation
        previousService={{ name: "SEO Optimization", link: "/services/seoOptimization" }}
        nextService={{ name: "Content Creation", link: "/services/contentCreation" }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default SocialMediaManagement;
