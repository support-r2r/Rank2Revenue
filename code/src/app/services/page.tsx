"use client";

import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import Footer from '../components/Footer'; // Adjust the path if necessary

import ServicesContent from '../components/ServicesContent';

const Services = () => {
  // Example content data that you can customize or import from another file
  const contentData = [
    {
      imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2671&q=80",
      subheading: "Website Development",
      heading: "Tailored for Your Business",
      description:
        "We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.",
      buttonText: "Read More",
      extraText: "Website Development",
      href: "/services/websiteDevelopment",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2671&q=80",
      subheading: "SEO Optimization",
      heading: "Boost Your Online Presence",
      description:
        "Our SEO optimization services are designed to improve your website’s visibility on search engines, helping you attract more organic traffic and potential customers.",
      buttonText: "Discover More",
      extraText: "SEO Optimization",
      href: "/services/seoOptimization",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=2671&q=80",
      subheading: "Social Media Management",
      heading: "Engage with Your Audience",
      description:
        "We manage your social media platforms to ensure consistent branding and engaging content that keeps your audience interested and connected to your business.",
      buttonText: "Get Started",
      extraText: "Social Media Management",
      href: "/services/socialMediaManagement",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=2671&q=80",
      subheading: "Content Creation",
      heading: "Quality Content for Your Brand",
      description:
        "We provide content creation services, including blog posts, graphics, and videos, to enhance your brand’s presence and engage your target audience effectively.",
      buttonText: "Learn More",
      extraText: "Content Creation",
      href: "/services/contentCreation",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1581091870621-8fd8d8d28516?auto=format&fit=crop&w=2671&q=80",
      subheading: "Email Marketing (EDM)",
      heading: "Drive Conversions with Emails",
      description:
        "Our email marketing services are tailored to nurture leads, promote your brand, and drive conversions with personalized and engaging email campaigns.",
      buttonText: "Explore",
      extraText: "Email Marketing (EDM)",
      href: "/services/emailMarketing",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=2671&q=80",
      subheading: "Area Marketing",
      heading: "Local Strategies for Big Impact",
      description:
        "We specialize in area marketing strategies, focusing on targeting local audiences to maximize your brand’s impact and visibility within specific regions.",
      buttonText: "Find Out More",
      extraText: "Area Marketing",
      href: "/services/areaMarketing",
    },
  ];
  

  return (
    <div>
      <Navbar />
      {/* Uncomment Hero component if you want to use it */}
      {/* <Hero /> */}
      <ServicesContent 
      title = "our serivces"
      contentData={contentData} />
      <Footer />
    </div>
  );
};

export default Services;
