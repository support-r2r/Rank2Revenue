import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";
import TitleComponent from "../../components/TitleComponent"; // Importing TitleComponent

// Define the Content interface
interface Content {
  label: string;
  stepNumber: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  ctaClasses: string;
}

// Updated Area Marketing Data with alternating colors
const areaMarketingData: Content[] = [
  {
    label: "Local Outreach",
    stepNumber: "01",
    title: "Local Strategies for Big Impact",
    description:
      "We specialize in area marketing strategies, focusing on targeting local audiences to maximize your brand’s impact and visibility within specific regions.",
    buttonText: "Find Out More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
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
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-white text-black", // White background
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
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    ctaClasses: "bg-blue-600 text-white", // Blue background
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
    ctaClasses: "bg-white text-black", // White background
  },
];

const AreaMarketing = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 py-8">
        {/* Using TitleComponent for the title, subtitle, and description */}
        <TitleComponent
          title="Area Marketing Services"
          subtitle="Maximize Your Local Impact"
        />
        <ContentPages contentData={areaMarketingData} />
        <ServiceNavigation
          previousService={{
            name: "Website Development",
            link: "/services/websiteDevelopment",
          }}
          nextService={{
            name: "Content Creation",
            link: "/services/contentCreation",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AreaMarketing;
