"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Use usePathname for Next.js 13 compatibility
import "./globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  // Get the current pathname to construct the canonical URL
  const pathname = usePathname();
  const canonicalURL = `https://rank2revenue.com.au${pathname || ""}`;

  // Schema.org Structured Data: Website
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

  // Schema.org Structured Data: Organization
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rank2Revenue",
    "url": "https://rank2revenue.com.au",
    "logo": "https://rank2revenue.com.au/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234",
      "contactType": "Customer Service",
    },
    "sameAs": [
      "https://www.facebook.com/rank2revenue",
      "https://www.linkedin.com/company/rank2revenue",
    ],
  };

  // Schema.org Structured Data: Services
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Website Development",
        "url": "https://rank2revenue.com.au/services/website-development",
        "description":
          "Professional website development services to build robust and responsive websites.",
      },
      {
        "@type": "Service",
        "name": "SEO Optimization",
        "url": "https://rank2revenue.com.au/services/seo-optimization",
        "description":
          "Enhance your website's visibility on search engines with our SEO services.",
      },
      {
        "@type": "Service",
        "name": "Social Media Management",
        "url": "https://rank2revenue.com.au/services/social-media-management",
        "description":
          "Manage your social media presence effectively to engage with your audience.",
      },
      {
        "@type": "Service",
        "name": "Content Creation",
        "url": "https://rank2revenue.com.au/services/content-creation",
        "description":
          "Create high-quality content to attract and retain your target audience.",
      },
      {
        "@type": "Service",
        "name": "Email Marketing",
        "url": "https://rank2revenue.com.au/services/email-marketing",
        "description":
          "Reach out to your customers directly with our email marketing campaigns.",
      },
    ],
  };

  // Schema.org Structured Data: Breadcrumbs
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rank2revenue.com.au/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://rank2revenue.com.au/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Website Development",
        "item": "https://rank2revenue.com.au/services/website-development",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Optimization",
        "item": "https://rank2revenue.com.au/services/seo-optimization",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Social Media Management",
        "item": "https://rank2revenue.com.au/services/social-media-management",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Content Creation",
        "item": "https://rank2revenue.com.au/services/content-creation",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Email Marketing",
        "item": "https://rank2revenue.com.au/services/email-marketing",
      },
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
    ],
  };

  return (
    <html lang="en" className="h-full w-full bg-white">
      <head>
        <title>Rank2Revenue</title>
        <meta
          name="description"
          content="Grow your brand with expert digital marketing services."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, content marketing, web development"
        />
        <meta name="author" content="Rank2Revenue" />

        {/* Add Canonical Tag */}
        <link rel="canonical" href={canonicalURL} />

        {/* Inject Schema.org structured data */}
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
      </head>
      <body className="h-full w-full bg-white text-black overflow-x-hidden">
        {/* Full-width Hero Component without constraints */}
        <div className="w-full">{childrenArray[0]}</div>

        {/* Constrained layout for the rest of the content */}
        <main className="w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          {childrenArray.slice(1)}
        </main>
      </body>
    </html>
  );
};

export default Layout;
