import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface FooterLinkProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="space-y-2">
    <h6 className="footer-title font-semibold text-gray-700">{title}</h6>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="link link-hover text-gray-600 hover:text-gray-800 block"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const serviceLinks = [
    { label: 'Website Development', href: '/services/websiteDevelopment' },
    { label: 'SEO Optimization', href: '/services/seoOptimization' },
    { label: 'Social Media Management', href: '/services/socialMediaManagement' },
    { label: 'Content Creation', href: '/services/contentCreation' },
    { label: 'Email Marketing', href: '/services/emailMarketing' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ];

  const sitemapLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Generate JSON-LD data

  // WebSite structured data with absolute URLs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rank2Revenue",
    "url": "https://rank2revenue.com.au",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rank2revenue.com.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Home",
        "url": "https://rank2revenue.com.au/",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Services",
        "url": "https://rank2revenue.com.au/services",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "About Us",
        "url": "https://rank2revenue.com.au/about",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://rank2revenue.com.au/contact",
      },
    ],
  };

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rank2Revenue",
    "url": "https://rank2revenue.com.au",
    "logo": "https://rank2revenue.com.au/logo.png", // Update with your logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234", // Update with your contact number
      "contactType": "Customer Service",
    },
    "sameAs": [
      "https://www.facebook.com/yourprofile", // Update with your social profiles
      "https://www.twitter.com/yourprofile",
      "https://www.linkedin.com/company/rank2revenue",
    ],
  };

  // Services structured data
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Website Development",
        "url": "https://rank2revenue.com.au/services/websiteDevelopment",
        "description": "Professional website development services to build robust and responsive websites.",
      },
      {
        "@type": "Service",
        "name": "SEO Optimization",
        "url": "https://rank2revenue.com.au/services/seoOptimization",
        "description": "Enhance your website's visibility on search engines with our SEO services.",
      },
      {
        "@type": "Service",
        "name": "Social Media Management",
        "url": "https://rank2revenue.com.au/services/socialMediaManagement",
        "description": "Manage your social media presence effectively to engage with your audience.",
      },
      {
        "@type": "Service",
        "name": "Content Creation",
        "url": "https://rank2revenue.com.au/services/contentCreation",
        "description": "Create high-quality content to attract and retain your target audience.",
      },
      {
        "@type": "Service",
        "name": "Email Marketing",
        "url": "https://rank2revenue.com.au/services/emailMarketing",
        "description": "Reach out to your customers directly with our email marketing campaigns.",
      },
    ],
  };

  // BreadcrumbList structured data with all breadcrumbs
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      // Home
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rank2revenue.com.au/",
      },
      // Services
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://rank2revenue.com.au/services",
      },
      // Individual Services
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Website Development",
        "item": "https://rank2revenue.com.au/services/websiteDevelopment",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Optimization",
        "item": "https://rank2revenue.com.au/services/seoOptimization",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Social Media Management",
        "item": "https://rank2revenue.com.au/services/socialMediaManagement",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Content Creation",
        "item": "https://rank2revenue.com.au/services/contentCreation",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Email Marketing",
        "item": "https://rank2revenue.com.au/services/emailMarketing",
      },
      // Company pages
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://rank2revenue.com.au/about",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://rank2revenue.com.au/contact",
      },
      // Legal pages
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Use",
        "item": "https://rank2revenue.com.au/terms-of-use",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://rank2revenue.com.au/privacy-policy",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cookie Policy",
        "item": "https://rank2revenue.com.au/cookie-policy",
      },
    ],
  };

  return (
    <>
      {/* Include structured data in the <head> */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
        {/* Call to Action Section */}
        <div className="bg-white py-12 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            What are you waiting for?
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            Let’s craft an elegant solution.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact
          </a>
        </div>

        {/* Footer Links */}
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-8 p-10">
          <FooterLinkSection title="Services" links={serviceLinks} />
          <FooterLinkSection title="Company" links={companyLinks} />
          <FooterLinkSection title="Legal" links={legalLinks} />
          <FooterLinkSection title="Sitemap" links={sitemapLinks} />
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rank2Revenue. All rights reserved.
          <div className="mt-2">
            <a
              href="https://www.designrush.com/agency/profile/rank2revenue"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verified Agency on DesignRush
            </a>
            <div className="mt-2">
              <a
                href="https://www.designrush.com/agency/profile/rank-to-revenue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.publicrelations-germany.com/wp-content/uploads/2019/02/Logo-DesignRush-770x433.png"
                  alt="Verified Agency on DesignRush"
                  className="inline-block h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;
