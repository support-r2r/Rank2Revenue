// components/HomePage.tsx
'use client';
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Stats from './components/Stats'
import ServicesCards from './components/ServicesCards'; // Import ServicesCards component
import CodeBeams from './components/coolbeam';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContentPages from './components/Contentpages';
import ServiceWorkflow from './components/ServiceWorkflow';
import FeaturedPage from './components/FeaturedPage';
import OurSkills from './components/OurSkills';
// import Testimonials from './components/Testimonials';

const HomePage: React.FC = () => {
  const cardData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description: "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png", // Path to the image in the public directory
      buttonText: "Visit Website",
      buttonLink: "https://cleardental.com.au",
    },
    {
      title: "Mazaj Restaurant",
      tags: ["Middle Eastern Cuisine", "Authentic", "Dining"],
      description: "Mazaj Restaurant provides an authentic Middle Eastern culinary experience, offering traditional dishes made with fresh ingredients and rich flavors. Enjoy a welcoming atmosphere with a focus on high-quality, flavorful food.",
      imageUrl: "/mazaj.png",
      buttonText: "Explore Menu",
      buttonLink: "https://mazaj.au",
    },
    {
      title: "Sandwich Lab",
      tags: ["Fast Food", "Gourmet Sandwiches", "Trendy"],
      description: "Sandwich Lab is a modern fast food outlet specializing in gourmet sandwiches, crafted with fresh and unique ingredients. Perfect for a quick, delicious meal that satisfies both taste and quality.",
      imageUrl: "/Sandwhich_lab.png",
      buttonText: "Order Now",
      buttonLink: "#", // Update to actual URL if available
    },
  ];

  return (
    <div>
      <Navbar /> 
      
      <Hero/>

      <Stats />

      <CodeBeams />
      
      <AboutSection />

      <OurSkills />

      {/* <FeaturedPage /> */}

      <ContentPages
        label="OUR STRATEGY"
        stepNumber="01"
        title="Develop Your Identity"
        description="We start by creating a strong and cohesive brand identity that reflects your company’s values, mission, and vision. Our process involves extensive market research to understand your industry landscape, followed by in-depth discussions to uncover the core essence of your brand. From designing a unique logo and visual style to establishing brand guidelines that ensure consistency, we lay the groundwork for an impactful and recognizable brand image across all platforms. Our goal is to craft an identity that resonates with your target audience and stands out in a competitive marketplace."
        buttonText="Learn More"
        buttonLink="#"
        imageUrl="https://via.placeholder.com/600"
        extraText="This foundational phase includes multiple rounds of feedback and refinement to ensure that your brand identity is both timeless and adaptable to future growth."
      />

      {/* Reversed Layout */}
      <ContentPages
        label="OUR STRATEGY"
        stepNumber="02"
        title="Grow Your Brand"
        description="Once your brand identity is established, we focus on growth strategies designed to expand your reach and amplify your brand's presence. We leverage a mix of digital marketing techniques, including SEO optimization, social media campaigns, email marketing, and influencer partnerships, to ensure your brand gets the visibility it deserves. Our team carefully analyzes data and audience insights to craft targeted campaigns that drive engagement and convert leads into loyal customers. By continuously monitoring and adjusting our strategies, we ensure sustained growth and a strong return on investment."
        buttonText="Discover How"
        buttonLink="#"
        imageUrl="https://via.placeholder.com/600"
        reverse
      />

      {/* "Our Finest Work" Heading */}
 

      {/* Services Section */}
      <ServicesCards /> {/* Renders the ServicesCards component */}

      {/* Project Cards Section */}

      <h1 className="text-center text-4xl font-bold text-[#8B5E3C] mb-8">Our Finest Work</h1>
      <div className="p-8 space-y-8">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            tags={data.tags}
            description={data.description}
            imageUrl={data.imageUrl}
            buttonText={data.buttonText}
            buttonLink={data.buttonLink}
          />
        ))}
      </div>

      {/* Testimonials Section */}
      {/* <div className="p-8">
        <Testimonials />
      </div> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
