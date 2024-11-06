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
            <a
              key={service.title}
              href={service.href}
              className="group relative block h-64 sm:h-80 lg:h-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-black rounded-xl"></span>

              <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl">
                <div className="p-6 w-full text-center !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4"
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
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>

                <div className="absolute p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 text-center">
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="mt-4 text-sm">
                    Explore our {service.title.toLowerCase()} service and discover how we can help you achieve your goals.
                  </p>
                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
