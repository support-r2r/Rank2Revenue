'use client';

import React from 'react';
import Link from 'next/link';

const ServicesCards: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      href: '/services/websiteDevelopment', // Updated to camel case
      description: `
        We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.
      `,
    },
    {
      title: 'SEO Optimization',
      href: '/services/seoOptimization', // Updated to camel case
      description: `
        Improve your website's visibility on search engines with our SEO services, focusing on targeted keywords and local or national reach to drive more organic traffic.
      `,
    },
    {
      title: 'Social Media Management',
      href: '/services/socialMediaManagement', // Updated to camel case
      description: `
        Enhance your social media presence with regular posts, targeted audience engagement, and brand-optimized profiles on platforms like Facebook and Instagram.
      `,
    },
    {
      title: 'Content Creation',
      href: '/services/contentCreation', // Updated to camel case
      description: `
        Our team crafts high-quality content and visuals to attract and engage your target audience, including blog posts, social media graphics, and more.
      `,
    },
    {
      title: 'Email Marketing (EDM)',
      href: '/services/emailMarketing', // Updated to camel case
      description: `
        Reach your audience directly with professionally designed email campaigns, tailored messaging, and regular engagement to keep your brand top of mind.
      `,
    },
    {
      title: 'Area Marketing',
      href: '/services/areaMarketing', // Updated to camel case
      description: `
        We focus on hyper-local marketing efforts within a targeted radius around your business to attract customers from nearby areas and boost foot traffic.
      `,
    },
  ];

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10">
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-white pb-10">
          Our Digital Marketing Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block h-56 sm:h-64 transition-all duration-300"
            >
              <span className="absolute inset-0 border border-dashed border-indigo-400 rounded-xl transition-transform duration-300 transform group-hover:scale-105"></span>

              <div className="relative flex h-full items-end border border-indigo-400 bg-gray-900 rounded-xl p-4 transition-transform duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="w-full text-center transition-opacity duration-300 group-hover:opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-400 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-900 bg-opacity-90 rounded-xl text-center">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-xs text-gray-300 whitespace-pre-line">
                    {service.description}
                  </p>
                  <p className="mt-6 font-bold text-indigo-400">Read more</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
