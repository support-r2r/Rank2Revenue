"use client";

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServicesContent from "@/app/components/ServicesContent";
import { CTA } from "@/app/components/CTA";
import ServiceNavigation from "@/app/components/ServiceNavigation";

const emailMarketingData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1581091870621-8fd8d8d28516?auto=format&fit=crop&w=1920&q=80",
    subheading: "Email Campaigns",
    heading: "Drive Conversions with Emails",
    description:
      "Our email marketing services are tailored to nurture leads, promote your brand, and drive conversions with personalized and engaging email campaigns.",
    buttonText: "Explore",
    extraText: "Email Marketing (EDM)",
    href: "/contact",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1598837126231-bff3208fc1c2?auto=format&fit=crop&w=1920&q=80",
    subheading: "Automated Workflows",
    heading: "Save Time & Increase Engagement",
    description:
      "We design and implement automated email campaigns that save you time and ensure your audience receives timely, relevant messages.",
    buttonText: "Automate Now",
    extraText: "Email Automation",
    href: "/contact",
  },
];

const EmailMarketing = () => {
  return (
    <div>
      <Navbar />
      <ServicesContent title="Email Marketing" contentData={emailMarketingData} />
      <ServiceNavigation
        previousService={{ name: "Content Creation", link: "/services/contentCreation" }}
        nextService={{ name: "Area Marketing", link: "/services/areaMarketing" }}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default EmailMarketing;
