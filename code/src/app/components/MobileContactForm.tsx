"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FaCommentDots, FaUserCircle } from "react-icons/fa"; // Import icons from react-icons

const ChatButtonWithForm: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false); // Initially set to false
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition > viewportHeight / 2) {
        setIsTooltipVisible(true);
      } else {
        setIsTooltipVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsTooltipVisible(false); // Hide the tooltip when the form is opened
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
      {/* Tooltip Message */}
      {isTooltipVisible && (
        <div className="flex items-center bg-white rounded-lg shadow-lg p-3 mb-3 mr-3 max-w-xs">
          <FaUserCircle className="text-gray-500 h-10 w-10" /> {/* Avatar Icon */}
          <p className="ml-3 text-gray-800 font-medium text-sm">
            Welcome to Rank2Revenue! How can we help you today?
          </p>
        </div>
      )}

      {/* Chat Button with Pulsing Animation */}
      <motion.button
        onClick={toggleFormVisibility}
        className="p-3 bg-purple-600 text-white rounded-full shadow-lg focus:outline-none"
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
        <FaCommentDots className="h-6 w-6" />
      </motion.button>

      {/* Contact Form with Animation */}
      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 bg-white text-black rounded-lg shadow-2xl p-4 w-72 sm:w-80"
        >
          <div className="bg-purple-600 rounded-t-lg p-3 text-center text-white">
            <h3 className="text-base font-semibold sm:text-lg">
              Welcome to Rank2Revenue!
            </h3>
          </div>
          <p className="text-center text-purple-600 font-bold mt-2 text-sm">
            One text away! 😉
          </p>
          <form className="p-3 space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-purple-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Phone"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-purple-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border rounded p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:border-purple-600"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white w-full p-2 rounded hover:bg-purple-700 focus:outline-none"
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
