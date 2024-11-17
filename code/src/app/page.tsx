// components/HomePage.tsx
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ServicesCards from './components/ServicesCards'; // Import ServicesCards component
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import MobileContactForm from './components/MobileContactForm'
import CampaignSection from './components/CampaignSection';
// import Testimonials from './components/Testimonials';

const HomePage: React.FC = () => {
  const cardData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description: "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png",
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
      buttonLink: "#",
    },
  ];

  return (
    <div>
      <Navbar /> {/* Navbar at the top */}

      <Hero
  title="Grow Your Brand with Digital Marketing Experts"
  subtitle="Tailored Strategies for Maximum Impact"
  description="From SEO and content marketing to social media management and web development, we provide comprehensive digital solutions designed to elevate your brand and drive measurable results."
  primaryButtonText="Contact Us"
  primaryButtonLink="/contact"
  secondaryButtonText="View Services"
  secondaryButtonLink="/services"
  imageUrl="https://agencex-astro.vercel.app/images/image1.webp" // Using the provided image URL
/>


{/* Hero section with updated text for a digital marketing agency */}

{/* Hero section with the updated buttons for "View Services" and "Contact Us" */}


      <AboutSection />

      <CampaignSection />

      {/* Services Section */}
      <div className="p-8">
        <ServicesCards /> {/* Renders the ServicesCards component */}
      </div>

      {/* Project Cards Section */}
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

      <MobileContactForm />

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
