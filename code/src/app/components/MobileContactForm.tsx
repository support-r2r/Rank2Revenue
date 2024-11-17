"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Image from "next/image";
import Rank2RevenueImage from "../../../public/rank2Revnue.png"; // Adjust the path to your image file

const ChatButtonWithForm: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://formspree.io/f/mvgoakrv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setResponseMessage("Success! Your message has been sent.");
          setName("");
          setPhone("");
          setMessage("");
        } else {
          setResponseMessage("Oops! There was a problem with your submission.");
        }
      })
      .catch(() => {
        setResponseMessage("Error: Unable to send your message.");
      });
  };

  return (
    <div className="fixed top-[67%] right-5 z-50 flex flex-col items-end">
      {/* Chat Button with Pulsing Animation */}
      <motion.button
        onClick={toggleFormVisibility}
        className="p-4 rounded-full shadow-lg focus:outline-none"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Using Rank2Revenue Image as Button */}
        <Image
          src={Rank2RevenueImage}
          alt="Rank2Revenue"
          width={50} // Adjust the width as needed
          height={50} // Adjust the height as needed
          className="rounded-full"
        />
      </motion.button>

      {/* Contact Form with Animation */}
      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 bg-white text-black rounded-lg shadow-2xl p-6 w-80" // Adjusted positioning
        >
          <div className="bg-blue-500 rounded-t-lg p-4 text-center text-white">
            <h3 className="text-lg font-semibold">
              We are here to help. One of our admin team will text you back!
            </h3>
          </div>
          <p className="text-center text-blue-500 font-bold mt-2">
            One text away! 😉
          </p>
          <form className="p-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Phone"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Text Us
            </button>
          </form>
          {responseMessage && (
            <p className="text-sm text-center mt-2">{responseMessage}</p>
          )}
          <p className="text-xs text-gray-500 text-center mt-2">
            By submitting this form, you consent to receive marketing text
            messages. Message and data rates may apply. Message frequency
            varies.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ChatButtonWithForm;
