"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Use usePathname for dynamic canonical URLs
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  // Get the current pathname to construct the canonical URL
  const pathname = usePathname();
  const canonicalURL = `https://rank2revenue.com.au${pathname || ""}`;

  // Schema.org Structured Data: Website
  // Schema.org Structured Data: Website
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rank To Revenue",
  url: "https://rank2revenue.com.au",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://rank2revenue.com.au/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  hasPart: [
    { "@type": "SiteNavigationElement", name: "Home", url: "https://rank2revenue.com.au/" },
    { "@type": "SiteNavigationElement", name: "Services", url: "https://rank2revenue.com.au/services" },
    { "@type": "SiteNavigationElement", name: "About Us", url: "https://rank2revenue.com.au/about" },
    { "@type": "SiteNavigationElement", name: "Contact", url: "https://rank2revenue.com.au/contact" },
  ],
};

// Schema.org Structured Data: Organization
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rank To Revenue",
  url: "https://rank2revenue.com.au",
  logo: "https://rank2revenue.com.au/logo.png", // Ensure the actual logo path is correct
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61 481958385",
    email: "admin@rank2revenue.com.au",
    contactType: "Customer Support",
    areaServed: "Australia",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/rank2revenue",
    "https://www.linkedin.com/company/rank2revenue",
    "https://www.instagram.com/rank2revenue/",
  ],
};

// Schema.org Structured Data: Services
const servicesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Website Development",
      url: "https://rank2revenue.com.au/services/website-development",
      description: "Build responsive, user-friendly, and visually appealing websites tailored to your business needs.",
    },
    {
      "@type": "Service",
      name: "SEO Optimization",
      url: "https://rank2revenue.com.au/services/seo-optimization",
      description: "Enhance your website's visibility on search engines to drive organic traffic and improve rankings.",
    },
    {
      "@type": "Service",
      name: "Social Media Management",
      url: "https://rank2revenue.com.au/services/social-media-management",
      description: "Strategically manage and grow your social media presence to connect with your audience.",
    },
    {
      "@type": "Service",
      name: "Content Creation",
      url: "https://rank2revenue.com.au/services/content-creation",
      description: "Craft engaging and high-quality content that resonates with your target audience across platforms.",
    },
    {
      "@type": "Service",
      name: "Email Marketing",
      url: "https://rank2revenue.com.au/services/email-marketing",
      description: "Design and deliver personalized email campaigns to nurture leads and retain customers.",
    },
    {
      "@type": "Service",
      name: "Area Marketing",
      url: "https://rank2revenue.com.au/services/area-marketing",
      description: "Target specific geographic areas to maximize local outreach and engagement.",
    },
  ],
};

// Schema.org Structured Data: Breadcrumbs
const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rank2revenue.com.au/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rank2revenue.com.au/services" },
    { "@type": "ListItem", position: 3, name: "Website Development", item: "https://rank2revenue.com.au/services/website-development" },
    { "@type": "ListItem", position: 3, name: "SEO Optimization", item: "https://rank2revenue.com.au/services/seo-optimization" },
    { "@type": "ListItem", position: 3, name: "Social Media Management", item: "https://rank2revenue.com.au/services/social-media-management" },
    { "@type": "ListItem", position: 3, name: "Content Creation", item: "https://rank2revenue.com.au/services/content-creation" },
    { "@type": "ListItem", position: 3, name: "Email Marketing", item: "https://rank2revenue.com.au/services/email-marketing" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://rank2revenue.com.au/about" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://rank2revenue.com.au/contact" },
  ],
};

  return (
    <html lang="en" className="h-full w-full bg-white">
      <head>
        <title>Rank To Revenue - Grow now</title>
        <meta name="description" content="Grow your brand with expert digital marketing services." />
        <meta name="keywords" content="digital marketing, SEO, content marketing, web development" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href={canonicalURL} />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />


        {/* Inject Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      </head>
      <body className="h-full w-full bg-white text-black overflow-x-hidden">
        {/* Full-width Hero Component */}
        <div className="w-full">{childrenArray[0]}</div>

        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          {childrenArray.slice(1)}
        </main>
        <Analytics/> 
        <SpeedInsights />
      </body>
    </html>
  );
};

export default Layout;
