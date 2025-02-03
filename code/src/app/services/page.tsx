"use client";

import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import Footer from '../components/Footer'; // Adjust the path if necessary
import ServicesCards from '../components/ServicesCards';
import Hero from '../components/Hero'; // Import Hero component

const Services = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section with a broader, punchy message for all services */}
      <Hero
        title="Empower Your Business with Comprehensive Digital Solutions"
        subtitle="Your One-Stop Solution for Digital Success"
        description="From SEO to branding and web development, our expert team is here to elevate your online presence, drive growth, and help you stand out in today’s digital landscape."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="#services-overview"
        imageUrl="https://i.imgur.com/x6VxL8i.png" // Added the image URL
      />

      <ServicesCards />

      <div id="services-overview" className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What We Offer
        </h1>

        <section className="space-y-16">
          {/* Section 1 - Why Our Services Matter */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-start">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Why Choose Our Services?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Comprehensive Strategy</h3>
                <p className="text-gray-700">
                  We don’t just offer individual services; we create a holistic strategy that integrates SEO, branding, content, and more to meet your unique goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Results-Driven Approach</h3>
                <p className="text-gray-700">
                  Our goal is simple: deliver measurable results. Every action we take is backed by data, ensuring maximum ROI for your business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Dedicated Experts</h3>
                <p className="text-gray-700">
                  Our team of experienced professionals is dedicated to each project, providing you with the expertise and support you need to succeed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Service</h3>
                <p className="text-gray-700">
                  No two businesses are the same. We tailor our services to fit your brand and target audience, ensuring the best outcomes for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Overview of Our Services */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-start">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Our Full Range of Digital Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">SEO & Content Marketing</h3>
                <p className="text-gray-700">
                  Drive traffic, enhance visibility, and boost your online presence with our proven SEO and content strategies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Branding & Identity</h3>
                <p className="text-gray-700">
                  We build brands that stand out. From logo design to brand messaging, we create identities that resonate with your audience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Web Development & Design</h3>
                <p className="text-gray-700">
                  Our development team creates responsive, user-friendly websites designed to convert visitors into loyal customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Social Media Management</h3>
                <p className="text-gray-700">
                  We manage your social presence with engaging content and strategic posts, building a strong community around your brand.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">PPC & Digital Advertising</h3>
                <p className="text-gray-700">
                  Reach your target audience instantly with our pay-per-click advertising and digital marketing expertise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Analytics & Reporting</h3>
                <p className="text-gray-700">
                  Understand your audience and track your success with our detailed analytics and reporting services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
