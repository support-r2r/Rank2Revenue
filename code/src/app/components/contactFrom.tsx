"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// DottedButton Component
const DottedButton: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ translateX: -4, translateY: -4 }}
      whileTap={{ translateX: 0, translateY: 0 }}
      className={`rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:rounded-md hover:shadow-[4px_4px_0px_black] active:rounded-2xl active:shadow-none ${className}`}
    >
      {children}
    </motion.button>
  );
};

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

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-screen bg-white font-sans">
      {/* Left Contact Section wrapped in a card-like container */}
      <motion.div
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/4 w-full p-6 flex justify-center items-center"
      >
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg mb-4">
              We&apos;d love to hear from you! Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
              <DottedButton
                className="flex-1 mb-4 sm:mb-0"
                onClick={() => handleButtonClick("call")}
              >
                Call
              </DottedButton>
              <DottedButton
                className="flex-1 mb-4 sm:mb-0"
                onClick={() => handleButtonClick("email")}
              >
                Email
              </DottedButton>
              <DottedButton
                className="flex-1"
                onClick={() => handleButtonClick("schedule")}
              >
                Schedule
              </DottedButton>
            </div>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-600">Phone</h3>
              <p className="text-base">+41 52 212 30 71</p>
            </div>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-600">Email</h3>
              <p className="text-base">info@rank2revenue.com.au</p>
            </div>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-600">Address</h3>
              <p className="text-base">
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
      </motion.div>

      {/* Right Content Section with Image */}
      <motion.div
        variants={rightVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-3/4 w-full bg-gray-100 flex items-center justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
          alt="Contact Us"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
