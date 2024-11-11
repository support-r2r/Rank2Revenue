"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "../../components/ServicesContent";
import { CTA } from "../../components/CTA";
import ServiceNavigation from "../../components/ServiceNavigation";

const areaMarketingData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=1920&q=80",
    subheading: "Local Outreach",
    heading: "Local Strategies for Big Impact",
    description:
      "We specialize in area marketing strategies, focusing on targeting local audiences to maximize your brand’s impact and visibility within specific regions.",
    buttonText: "Find Out More",
    extraText: "Area Marketing",
    href: "/contact",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1551861560-270b3811a503?auto=format&fit=crop&w=1920&q=80",
    subheading: "Community Engagement",
    heading: "Build Strong Local Connections",
    description:
      "Our community engagement initiatives connect your brand with local groups and organizations, fostering trust and loyalty in your area.",
    buttonText: "Connect Locally",
    extraText: "Community Engagement",
    href: "/contact",
  },
];

const AreaMarketing = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent title="Area Marketing" contentData={areaMarketingData} />
      <ServiceNavigation
        previousService={{ name: "Email Marketing", link: "/services/emailMarketing" }}
        nextService={{ name: "Website Development", link: "/services/websiteDevelopment" }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default AreaMarketing;
