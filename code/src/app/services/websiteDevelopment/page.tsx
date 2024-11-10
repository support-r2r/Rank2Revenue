"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "@/app/components/ServicesContent";
import { CTA } from "@/app/components/CTA";
import ServiceNavigation from "@/app/components/ServiceNavigation";

const websiteDevelopmentData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    subheading: "Custom Solutions",
    heading: "Tailored for Your Business",
    description:
      "We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.",
    buttonText: "Read More",
    extraText: "Website Development",
    href: "/contact",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1522204512849-88b98f0c5dcb?auto=format&fit=crop&w=1920&q=80",
    subheading: "E-commerce Platforms",
    heading: "Sell Online with Ease",
    description:
      "Our team specializes in developing e-commerce platforms that are easy to use and optimized for conversions, featuring seamless payment integrations and a smooth user experience.",
    buttonText: "Explore More",
    extraText: "E-commerce Solutions",
    href: "/contact",
  },
];

const WebsiteDevelopment = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent title="Website Development" contentData={websiteDevelopmentData} />
      <ServiceNavigation
        previousService={{ name: "Area Marketing", link: "/services/areaMarketing" }}
        nextService={{ name: "SEO Optimization", link: "/services/seoOptimization" }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
