"use client";

import React from "react";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing requested icons

const CampaignShowcase: React.FC = () => {
  return (
    <section className="my-12 p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Campaigns</h2>
        <p className="text-gray-600 mb-8">
          Explore how we utilize platforms like Google, Meta, and Instagram to
          deliver engaging and impactful marketing campaigns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Google Campaign */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaGoogle className="text-blue-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Google Ads</h3>
            <p className="text-gray-500">
              Optimize your reach and boost engagement with targeted Google ad
              campaigns.
            </p>
          </div>

          {/* Meta (Facebook) Campaign */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaFacebook className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Meta Campaigns</h3>
            <p className="text-gray-500">
              Reach your audience effectively on Facebook with our tailored ad
              strategies.
            </p>
          </div>

          {/* Instagram Campaign */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaInstagram className="text-pink-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Instagram Ads</h3>
            <p className="text-gray-500">
              Engage users with visually stunning and interactive Instagram ad
              campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignShowcase;
