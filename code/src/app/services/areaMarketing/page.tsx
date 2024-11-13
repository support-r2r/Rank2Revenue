import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation"; // Importing ServiceNavigation

const areaMarketingData = [
  {
    label: "Local Outreach",
    stepNumber: "01",
    title: "Local Strategies for Big Impact",
    description:
      "We specialize in area marketing strategies, focusing on targeting local audiences to maximize your brand’s impact and visibility within specific regions.",
    buttonText: "Find Out More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=1920&q=80",
    extraText: "Area Marketing",
  },
  {
    label: "Community Engagement",
    stepNumber: "02",
    title: "Build Strong Local Connections",
    description:
      "Our community engagement initiatives connect your brand with local groups and organizations, fostering trust and loyalty in your area.",
    buttonText: "Connect Locally",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1551861560-270b3811a503?auto=format&fit=crop&w=1920&q=80",
    extraText: "Community Engagement",
  },
  {
    label: "Event Sponsorship",
    stepNumber: "03",
    title: "Make Your Brand Known",
    description:
      "Sponsor local events to increase brand awareness and establish a strong presence in your community. We help identify the right events to align with your brand.",
    buttonText: "Sponsor Events",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1920&q=80",
    extraText: "Event Sponsorship",
  },
  {
    label: "Local SEO",
    stepNumber: "04",
    title: "Dominate Local Search Results",
    description:
      "Optimize your online presence to rank higher in local search results. Our local SEO strategies ensure your business is easily found by nearby customers.",
    buttonText: "Improve SEO",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    extraText: "Local SEO",
  },
];

const AreaMarketing = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={areaMarketingData} />
      <ServiceNavigation
        previousService={{
          name: "Digital Advertising",
          link: "/services/websiteDevelopment",
        }}
        nextService={{
          name: "SEO Optimization",
          link: "/services/contentCreation",
        }}
      />
      <Footer />
    </div>
  );
};

export default AreaMarketing;
