"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ShiftHighlightTabsProps {
  selected: string;
  setSelected: (value: string) => void;
}

const ContactForm: React.FC = () => {
  const [selected, setSelected] = useState<string>("Email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mvgoakrv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Success! Your message has been sent.");
          form.reset();
        } else {
          alert("Oops! There was a problem with your submission.");
        }
      })
      .catch(() => {
        alert("Error: Unable to send your message.");
      });
  };

  return (
    <section className="p-6 bg-neutral-900 text-neutral-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header with Unsplash Image */}
      <div className="flex items-center mb-6">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60"
          alt="ESE Agency"
          className="h-12 w-12 rounded-full mr-4"
        />
        <h1 className="text-4xl font-bold">ese agency™ Contact</h1>
      </div>

      {/* Shift Highlight Tabs */}
      <ShiftHighlightTabs selected={selected} setSelected={setSelected} />

      {/* Form Section */}
      <div className="w-full max-w-md mb-8 bg-neutral-800 p-8 rounded-lg shadow-lg transition-colors duration-[750ms]">
        <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative">
            <label className="block text-xs font-medium text-neutral-400 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Your name..."
              className="w-full bg-neutral-700 text-neutral-50 border border-neutral-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Email/Phone based on Tab Selection */}
          <div className="relative">
            <label className="block text-xs font-medium text-neutral-400 mb-1">
              {selected === "Email" ? "Email" : "Phone"}
            </label>
            <input
              type={selected === "Email" ? "email" : "tel"}
              placeholder={selected === "Email" ? "Your email..." : "Your phone number..."}
              className="w-full bg-neutral-700 text-neutral-50 border border-neutral-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Description Input */}
          <div className="relative">
            <label className="block text-xs font-medium text-neutral-400 mb-1">Description</label>
            <textarea
              placeholder="Your description..."
              className="w-full bg-neutral-700 text-neutral-50 border border-neutral-600 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="bg-emerald-300 text-black font-semibold rounded-md h-10 px-4 w-full transition duration-300 hover:bg-emerald-400 focus:outline-none"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
};

const ShiftHighlightTabs: React.FC<ShiftHighlightTabsProps> = ({ selected, setSelected }) => {
  const options = ["Email", "Phone", "Schedule"];

  return (
    <div className="flex space-x-4 mb-8">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-[750ms] ${
            selected === option ? "bg-emerald-300 text-black" : "bg-neutral-700 text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ContactForm;
