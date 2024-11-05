// src/app/layout.tsx
import React from 'react';

import Homepage from './Homepage'; // Import the Homepage component
import './globals.css';

const Layout: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My Next.js App" />
      </head>
      <body className="bg-white text-gray-900">
      

        {/* Main Content - Homepage Only */}
        <main className="container mx-auto px-4">
          <Homepage /> {/* Render Homepage as the main content */}
        </main>
      </body>
    </html>
  );
};

export default Layout;
