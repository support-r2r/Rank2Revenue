"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const websiteDevelopmentData = [
  {
    label: "Custom Solutions",
    stepNumber: "01",
    title: "Tailored for Your Business",
    description:
      "We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.",
    buttonText: "Read More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    extraText: "Website Development",
  },
  {
    label: "E-commerce Platforms",
    stepNumber: "02",
    title: "Sell Online with Ease",
    description:
      "Our team specializes in developing e-commerce platforms that are easy to use and optimized for conversions, featuring seamless payment integrations and a smooth user experience.",
    buttonText: "Explore More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1522204512849-88b98f0c5dcb?auto=format&fit=crop&w=1920&q=80",
    extraText: "E-commerce Solutions",
  },
  {
    label: "SEO-Friendly Design",
    stepNumber: "03",
    title: "Rank Higher on Search Engines",
    description:
      "We implement SEO best practices into your website’s design to ensure that your site is easily discoverable by search engines, driving more organic traffic to your business.",
    buttonText: "Learn More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
    extraText: "SEO Optimization",
  },
  {
    label: "Mobile Optimization",
    stepNumber: "04",
    title: "Perfect for All Devices",
    description:
      "Our websites are fully optimized for mobile devices, ensuring that your visitors have a seamless and engaging experience, no matter how they access your site.",
    buttonText: "Check It Out",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d6c?auto=format&fit=crop&w=1920&q=80",
    extraText: "Mobile-First Design",
  },
  {
    label: "Website Maintenance",
    stepNumber: "05",
    title: "Keep Your Site Up-to-Date",
    description:
      "We offer ongoing website maintenance and support to ensure your website is always secure, up-to-date, and performing at its best, giving you peace of mind.",
    buttonText: "Get Support",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1920&q=80",
    extraText: "Website Maintenance",
  },
];


const WebsiteDevelopment = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={websiteDevelopmentData} />
      <ServiceNavigation
        previousService={{ name: "Area Marketing", link: "/services/socialMediaManagement" }}
        nextService={{ name: "SEO Optimization", link: "/services/areaMarketing" }}
      />
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
