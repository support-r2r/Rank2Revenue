"use client";

import React from "react";
import Image from "next/image";

const ContactSection: React.FC = () => {
  const handleButtonClick = (type: string) => {
    if (type === "call") {
      window.location.href = "tel:+41522123071"; // Replace with the actual phone number
    } else if (type === "email") {
      window.location.href = "mailto:info@rank2revenue.com.au"; // Replace with the actual email address
    } else if (type === "schedule") {
      window.open("https://your-scheduling-link.com", "_blank"); // Replace with the actual scheduling link
    }
  };

  return (
    <section className="flex h-screen bg-black">
      {/* Left Contact Section */}
      <div className="w-1/3 bg-black text-white p-8 flex flex-col justify-between">
        <div className="mt-16">
          <h1 className="text-4xl font-bold mb-6">Rank2Revenue™ Contact</h1>
          <div className="mb-4">
            <p className="mb-2">
              Hi 👋, I&apos;m Wasif, and I&apos;m here to assist you with your project
              inquiries. Feel free to send me an email at
              <br />
              <a
                href="mailto:wasif@rank2revenue.com.au"
                className="text-gray-400"
              >
                wasif@rank2revenue.com.au
              </a>
            </p>
            <p>
              Want to get in touch with our management team directly? Send an
              email to Keval at
              <br />
              <a
                href="mailto:keval@rank2revenue.com.au"
                className="text-gray-400"
              >
                keval@rank2revenue.com.au
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-4">
            <button
              className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg mr-2"
              onClick={() => handleButtonClick("call")}
            >
              Call
            </button>
            <button
              className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg mx-2"
              onClick={() => handleButtonClick("email")}
            >
              Email
            </button>
            <button
              className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg ml-2"
              onClick={() => handleButtonClick("schedule")}
            >
              Schedule
            </button>
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-400">Phone</h3>
            <p>+41 52 212 30 71</p>
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-400">Email</h3>
            <p>info@rank2revenue.com.au</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Address</h3>
            <p>
              Rank2Revenue
              <br />
              123 Business Road
              <br />
              Suite 456
              <br />
              City, Country
            </p>
          </div>
        </div>
      </div>

      {/* Right Content Section with Image */}
      <div className="w-2/3 bg-gray-900 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
          alt="Contact Us"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ContactSection;
