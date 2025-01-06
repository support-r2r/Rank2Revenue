"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DottedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const DottedButton: React.FC<DottedButtonProps> = ({
  onClick,
  children,
  className,
}) => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Submission successful!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (type: string) => {
    if (type === "call") {
      window.location.href = "tel:+61481958385";
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
    <section className="relative flex flex-col lg:flex-row h-full min-h-screen bg-white font-sans">
      {/* Left Contact Section */}
      <motion.div
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-center space-y-8"
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
            <DottedButton onClick={() => handleButtonClick("call")}>
              Call
            </DottedButton>
            <DottedButton onClick={() => handleButtonClick("email")}>
              Email
            </DottedButton>
            <DottedButton onClick={() => handleButtonClick("schedule")}>
              Schedule
            </DottedButton>
          </div>

          <div className="space-y-4 text-xs md:text-sm lg:text-base">
            <div>
              <h3 className="font-medium text-gray-600">Phone</h3>
              <p>+61481958385</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Email</h3>
              <p>info@rank2revenue.com.au</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Address</h3>
              <p>
                Rank To Revenue
                <br />
                 Macquarie Park NSW 2113
              </p>
            </div>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Send an Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="Message"
                rows={5}
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-gray-800 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Enquiry"}
              </button>
            </div>
          </form>
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
          priority
          className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96 lg:h-full"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
