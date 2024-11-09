import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="space-y-2">
    <h6 className="footer-title font-semibold text-[#F8EFEA]">{title}</h6>
    {links.map((link, index) => (
      <Link key={index} href={link.href} className="link link-hover text-[#D1B7A1] hover:text-[#F8EFEA] block transition duration-300">
        {link.label}
      </Link>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const serviceLinks = [
    { label: "Website Development", href: "/services/websiteDevelopment" },
    { label: "SEO Optimization", href: "/services/seoOptimization" },
    { label: "Social Media Management", href: "/services/socialMediaManagement" },
    { label: "Content Creation", href: "/services/contentCreation" },
    { label: "Email Marketing", href: "/services/emailMarketing" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press-kit" },
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="w-full bg-[#4B3832] text-[#D1B7A1] border-t border-[#8B5E3C]">
      {/* Call to Action Section */}
      <div className="bg-[#4B3832] py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#F8EFEA]">
          What are you waiting for?
        </h2>
        <p className="text-[#D1B7A1] text-md md:text-lg mb-6">
          Let’s craft an elegant solution.
        </p>
        <Link href="/contact" className="inline-block bg-[#A45A52] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8B5E3C] transition duration-300">
          Contact
        </Link>
      </div>

      {/* Footer Links */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-8 p-10">
        <FooterLinkSection title="Services" links={serviceLinks} />
        <FooterLinkSection title="Company" links={companyLinks} />
        <FooterLinkSection title="Legal" links={legalLinks} />
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-[#A45A52]">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
