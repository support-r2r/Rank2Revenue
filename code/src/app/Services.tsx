import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const services = [
  {
    title: "Branding",
    description: "Creating a unique identity for your business that stands out in the marketplace and resonates with your audience.",
  },
  {
    title: "Design",
    description: "Crafting visually stunning and user-friendly designs that make a lasting impression and improve user engagement.",
  },
  {
    title: "Marketing",
    description: "Developing tailored marketing strategies to reach your target audience and drive measurable results.",
  },
  {
    title: "Advertisement",
    description: "Implementing effective ad campaigns across various platforms to boost your brand's visibility and reach.",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
