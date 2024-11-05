import React from 'react';

const ServicesCards: React.FC = () => {
  const services = [
    { title: 'Search Engine Optimization (SEO)', href: '#' },
    { title: 'Content Marketing', href: '#' },
    { title: 'Social Media Management', href: '#' },
    { title: 'Pay-Per-Click Advertising (PPC)', href: '#' },
    { title: 'Email Marketing', href: '#' },
    { title: 'Web Design', href: '#' },
  ];

  return (
    <section className="bg-white py-24 px-4 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
        <h1 className="text-center text-5xl pb-12">Our Digital Marketing Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group h-48 flex flex-col rounded-xl bg-white shadow-md transition-all duration-300"
            >
              <a href={service.href} className="block h-full">
                <div className="p-6 w-full text-center z-10">
                  <p className="mb-2 text-xl font-semibold">{service.title}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-200 transition-opacity duration-300 rounded-xl">
                  <span className="text-lg font-medium text-gray-700">Learn More →</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
