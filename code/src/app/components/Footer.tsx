import React from 'react';

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="space-y-2">
    <h6 className="footer-title font-semibold text-gray-700">{title}</h6>
    {links.map((link, index) => (
      <a key={index} className="link link-hover text-gray-600 hover:text-gray-800 block">
        {link}
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const serviceLinks = ["Branding", "Design", "Marketing", "Advertisement"];
  const companyLinks = ["About us", "Contact", "Jobs", "Press kit"];
  const legalLinks = ["Terms of use", "Privacy policy", "Cookie policy"];

  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
      {/* Call to Action Section */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">What are you waiting for?</h2>
        <p className="text-gray-600 text-md md:text-lg mb-6">Let’s craft an elegant solution.</p>
        <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Contact
        </a>
      </div>

      {/* Footer Links */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-8 p-10">
        <FooterLinkSection title="Services" links={serviceLinks} />
        <FooterLinkSection title="Company" links={companyLinks} />
        <FooterLinkSection title="Legal" links={legalLinks} />
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
