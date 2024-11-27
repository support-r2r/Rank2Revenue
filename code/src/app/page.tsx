// components/HomePage.tsx
import React from 'react';
import Head from 'next/head'; // Import the Head component
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ServicesCards from './components/ServicesCards'; // Import ServicesCards component
import Footer from './components/Footer';
import MobileContactForm from './components/MobileContactForm';
import CampaignSection from './components/CampaignSection';
import Partners from "./components/Partners";
import StickyLogo from './components/StickyLogo';
// import Testimonials from './components/Testimonials';

const HomePage: React.FC = () => {
  const cardData = [
    {
      title: "Clear Dental",
      tags: ["Dental Care", "Health", "Clinic"],
      description:
        "Clear Dental offers comprehensive dental care services, combining advanced technology with compassionate patient care. From routine checkups to cosmetic dentistry, we ensure a comfortable and high-quality experience for all our patients.",
      imageUrl: "/clear_dental.png",
      buttonText: "Visit Website",
      buttonLink: "https://cleardental.com.au",
    },
    {
      title: "Mazaj Restaurant",
      tags: ["Middle Eastern Cuisine", "Authentic", "Dining"],
      description:
        "Mazaj Restaurant provides an authentic Middle Eastern culinary experience, offering traditional dishes made with fresh ingredients and rich flavors. Enjoy a welcoming atmosphere with a focus on high-quality, flavorful food.",
      imageUrl: "/mazaj.png",
      buttonText: "Explore Menu",
      buttonLink: "https://mazaj.au",
    },
    {
      title: "Sandwich Lab",
      tags: ["Fast Food", "Gourmet Sandwiches", "Trendy"],
      description:
        "Sandwich Lab is a modern fast food outlet specializing in gourmet sandwiches, crafted with fresh and unique ingredients. Perfect for a quick, delicious meal that satisfies both taste and quality.",
      imageUrl: "/Sandwhich_lab.png",
      buttonText: "Order Now",
      buttonLink: "#",
    },
  ];

  return (
    <div>
      {/* Head section for meta descriptions */}
      <Head>
        <title>Grow Your Brand with Digital Marketing Experts</title>
        <meta
          name="description"
          content="Elevate your brand with our expert digital marketing services, from SEO and content marketing to web development. Tailored strategies for measurable results."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, content marketing, social media management, web development"
        />
        <meta name="author" content="Your Company Name" />
      </Head>

      <StickyLogo />

      {/* Navbar at the top */}
      <Navbar />

      {/* Hero section with updated text for a digital marketing agency */}
      <Hero
        title="Grow Your Brand with Digital Marketing Experts"
        subtitle="Tailored Strategies for Maximum Impact"
        description="From SEO and content marketing to social media management and web development, we provide comprehensive digital solutions designed to elevate your brand and drive measurable results."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        imageUrl="https://agencex-astro.vercel.app/images/image1.webp"
      />

      {/* Technology Partners Section */}
      <Partners />

      {/* Campaign Section */}
      <CampaignSection />

      {/* Services Section */}
      <div className="p-8">
        <ServicesCards />
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

      {/* Mobile Contact Form */}
      <MobileContactForm />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
