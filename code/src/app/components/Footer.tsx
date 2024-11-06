import React from 'react';

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="space-y-2">
    <h6 className="footer-title font-semibold text-gray-200">{title}</h6>
    {links.map((link, index) => (
      <a key={index} className="link link-hover text-gray-400 hover:text-white block">
        {link}
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const serviceLinks = ["Website Development", "SEO Optimization", "Social Media Management", "Content Creation", "Email Marketing"];
  const companyLinks = ["About Us", "Contact", "Careers", "Press Kit"];
  const legalLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-700">
      {/* Call to Action Section */}
      <div className="bg-gray-900 py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">What are you waiting for?</h2>
        <p className="text-gray-400 text-md md:text-lg mb-6">Let’s craft an elegant solution.</p>
        <a href="/contact" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition">
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
