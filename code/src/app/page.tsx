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
        <title>Rank2Revenue | Digital Marketing Experts</title>
        <meta
          name="description"
          content="Rank2Revenue specializes in digital marketing services, including SEO, social media management, and web development, to grow your brand and maximize ROI."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, social media management, branding, content marketing, web development, Rank2Revenue"
        />
        <meta
          property="og:title"
          content="Rank2Revenue | Digital Marketing Experts"
        />
        <meta
          property="og:description"
          content="Grow your business with Rank2Revenue's tailored digital marketing strategies. Achieve measurable results through SEO, branding, and innovative web development solutions."
        />
        <meta property="og:image" content="https://rank2revenue.com.au/og-image.jpg" />
        <meta property="og:url" content="https://rank2revenue.com.au" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Rank2Revenue Digital Marketing Agency"
        />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/company/rank2revenue"
        />

    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />

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
