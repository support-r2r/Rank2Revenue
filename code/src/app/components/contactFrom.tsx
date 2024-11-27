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
      className={`rounded-md shadow-[4px_4px_0px_black] border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

const ContactSection: React.FC = () => {
  const handleButtonClick = (type: string) => {
    if (type === "call") {
      window.location.href = "tel:+41522123071";
    } else if (type === "email") {
      window.location.href = "mailto:info@rank2revenue.com.au";
    } else if (type === "schedule") {
      window.open("https://your-scheduling-link.com", "_blank");
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
    <section className="flex flex-col lg:flex-row h-full min-h-screen bg-white font-sans">
      {/* Left Contact Section */}
      <motion.div
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2 w-full p-6 flex justify-center items-center"
      >
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6">
            We&apos;d love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>

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

          <div className="space-y-4 text-xs md:text-sm lg:text-base">
            <div>
              <h3 className="font-medium text-gray-600">Phone</h3>
              <p>+41 52 212 30 71</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Email</h3>
              <p>info@rank2revenue.com.au</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Address</h3>
              <p>
                Rank2Revenue
                <br />
                5 Durham Cl
                <br />
                Macquarie Park NSW 2113
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
        className="lg:w-1/2 w-full bg-gray-100 flex items-center justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
          alt="Contact Us"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96 lg:h-full"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
