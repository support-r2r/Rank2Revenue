// src/app/layout.tsx
import React from 'react';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My Next.js App" />
      </head>
      <body className="bg-white text-gray-900">
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
