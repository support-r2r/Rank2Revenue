'use client';
import React from 'react';
import Image from 'next/image';
import Rank2RevenueImage from '../../../public/rank2Revnue.png';

const StickyLogo: React.FC = () => {
  return (
    <div
      className="fixed z-50 bg-white p-2 rounded-full shadow-lg border border-gray-200"
      style={{
        top: '67%', // Positioned 67% from the top
        left: '5%', // Adjust for horizontal alignment
        width: '100px', // Adjusted width for balanced size
        height: '100px', // Adjusted height for balanced size
        transform: 'translateY(-50%)', // Keeps the logo centered at 67%
      }}
    >
      <Image
        src={Rank2RevenueImage}
        alt="Rank2Revenue Logo"
        width={100} // Matches container width
        height={100} // Matches container height
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default StickyLogo;
