import { FaSearchDollar } from "react-icons/fa";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesCards: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      href: '/services/websiteDevelopment',
      description: `
        We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.
      `,
      icon: 'https://img.icons8.com/ios-filled/200/web.png',
    },
    {
      title: 'SEO Optimization',
      href: '/services/seoOptimization',
      description: `
        Improve your website's visibility on search engines with our SEO services, focusing on targeted keywords and local or national reach to drive more organic traffic.
      `,
      icon: <FaSearchDollar className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-black mx-auto mb-4" />,
    },
    {
      title: 'Social Media Management',
      href: '/services/socialMediaManagement',
      description: `
        Enhance your social media presence with regular posts, targeted audience engagement, and brand-optimized profiles on platforms like Facebook and Instagram.
      `,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-blue-600 mx-auto mb-4"
        >
          <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm256 384a32 32 0 1 0-64 0 32 32 0 0 0 64 0zm128-320H64v256h320V128z" />
        </svg>
      ),
    },
    {
      title: 'Content Creation',
      href: '/services/contentCreation',
      description: `
        Our team crafts high-quality content and visuals to attract and engage your target audience, including blog posts, social media graphics, and more.
      `,
      icon: 'https://img.icons8.com/ios-filled/200/content.png',
    },
    {
      title: 'Email Marketing (EDM)',
      href: '/services/emailMarketing',
      description: `
        Reach your audience directly with professionally designed email campaigns, tailored messaging, and regular engagement to keep your brand top of mind.
      `,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-blue-600 mx-auto mb-4"
        >
          <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" />
        </svg>
      ),
    },
    {
      title: 'Area Marketing',
      href: '/services/areaMarketing',
      description: `
        We focus on hyper-local marketing efforts within a targeted radius around your business to attract customers from nearby areas and boost foot traffic.
      `,
      icon: 'https://img.icons8.com/ios-filled/200/area-chart.png',
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 pb-12">
          Our Digital Marketing Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block h-72 sm:h-80 lg:h-96 transition-all duration-300"
            >
              <span className="absolute inset-0 border-2 border-dashed border-blue-600 rounded-xl transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500"></span>

              <div className="relative flex h-full items-end border-2 border-blue-600 bg-white rounded-xl p-6 transition-transform duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500">
                <div className="w-full text-center transition-opacity duration-300 group-hover:opacity-0">
                  {typeof service.icon === 'string' ? (
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={200}
                      height={200}
                      className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 text-blue-600 mx-auto mb-4"
                    />
                  ) : (
                    service.icon
                  )}
                  <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white bg-opacity-90 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-4 text-sm text-gray-700 whitespace-pre-line">
                    {service.description}
                  </p>
                  <p className="mt-8 font-bold text-blue-600">Read more</p>
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
