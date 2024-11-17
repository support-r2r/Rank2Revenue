"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";
import TitleComponent from "../../components/TitleComponent";

const emailMarketingData = [
  {
    label: "Email Campaigns",
    stepNumber: "01",
    title: "Drive Conversions with Emails",
    description:
      "Our email marketing services are tailored to nurture leads, promote your brand, and drive conversions with personalized and engaging email campaigns.",
    buttonText: "Explore",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Automated Workflows",
    stepNumber: "02",
    title: "Save Time & Increase Engagement",
    description:
      "We design and implement automated email campaigns that save you time and ensure your audience receives timely, relevant messages.",
    buttonText: "Automate Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "Personalization",
    stepNumber: "03",
    title: "Connect with Your Audience",
    description:
      "Utilize advanced personalization techniques to make your emails more relevant and engaging, enhancing your audience’s connection with your brand.",
    buttonText: "Personalize",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
  {
    label: "Analytics & Insights",
    stepNumber: "04",
    title: "Track Performance & Optimize",
    description:
      "Gain valuable insights into your email campaigns' performance and use data-driven strategies to continually optimize your approach.",
    buttonText: "Analyze",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
  },
  {
    label: "A/B Testing",
    stepNumber: "05",
    title: "Improve Email Effectiveness",
    description:
      "Implement A/B testing to discover what resonates best with your audience, and refine your email content for maximum impact and conversions.",
    buttonText: "Test Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
  },
];

const EmailMarketing = () => {
  return (
    <div>
      <Navbar />
      <TitleComponent
        title="Email Marketing"
        subtitle="Engage, Nurture, and Convert Your Audience"
      />
      <ContentPages contentData={emailMarketingData} />
      <ServiceNavigation
        previousService={{
          name: "Content Creation",
          link: "/services/contentCreation",
        }}
        nextService={{
          name: "SEO Optimization",
          link: "/services/seoOptimization",
        }}
      />
      <Footer />
    </div>
  );
};

export default EmailMarketing;
