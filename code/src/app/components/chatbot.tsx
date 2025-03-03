"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';

// -- FORM ENDPOINTS: rotates after 50 submissions each
const endpoints = [
  'https://formspree.io/f/xdkaqyyz',
  'https://formspree.io/f/placeholder1',
  'https://formspree.io/f/placeholder2'
];

// Keep track of total form submissions to switch endpoints
let submissionCount = 0;

// Hardcoded response keywords -> HTML content with potential links
const responses: Record<string, string> = {
  'ecommerce': 'For ecommerce businesses, we offer tailored SEO and PPC campaigns to boost your online sales. Check out <a href="https://rank2revenue.com.au/services" target="_blank" class="text-blue-600 underline">our services</a>.',
  'saas': 'For SaaS companies, we provide comprehensive digital marketing strategies to increase your user base.',
  'local': 'For local businesses, we focus on local SEO and social media marketing to attract nearby customers.',
  'Tell me about SEO': 'SEO (Search Engine Optimization) improves your website ranking on search engines. Learn more at <a href="https://moz.com/learn/seo" target="_blank" class="text-blue-600 underline">Moz SEO Guide</a>.',
  'What is PPC?': 'PPC (Pay-Per-Click) advertising helps you reach targeted audiences. Read more at <a href="https://www.wordstream.com/pay-per-click" target="_blank" class="text-blue-600 underline">WordStream PPC Guide</a>.',
  'How do I generate leads?': 'Lead generation involves content marketing, SEO, and paid ads. Check out <a href="https://blog.hubspot.com/marketing/lead-generation" target="_blank" class="text-blue-600 underline">HubSpot Lead Generation Guide</a>.',
  'Best marketing strategy for SaaS?': 'SaaS businesses benefit from inbound marketing, email nurturing, and PPC. See <a href="https://blog.hubspot.com/marketing/saas-marketing" target="_blank" class="text-blue-600 underline">SaaS Marketing Guide</a>.',
  'How do I optimize my website?': 'Website optimization includes improving speed, SEO, and user experience. Use <a href="https://pagespeed.web.dev/" target="_blank" class="text-blue-600 underline">Google PageSpeed Insights</a>.',
  'What is content marketing?': 'Content marketing builds trust through valuable content. Read more at <a href="https://contentmarketinginstitute.com/what-is-content-marketing/" target="_blank" class="text-blue-600 underline">Content Marketing Institute</a>.',
  'How do I use social media for marketing?': 'Social media helps engage customers and drive traffic. Learn more at <a href="https://blog.hootsuite.com/social-media-marketing-strategy/" target="_blank" class="text-blue-600 underline">Hootsuite Social Media Guide</a>.',
  'How to improve email marketing?': 'Email marketing drives engagement with personalized campaigns. See <a href="https://blog.hubspot.com/marketing/email-marketing-guide" target="_blank" class="text-blue-600 underline">HubSpot Email Guide</a>.'
};

export default function Chatbot() {
  // Chat messages, user input, open/close states
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    {
      sender: 'bot',
      text: "Welcome! Here are some quick links to get started:\n- 💬 FAQs\n- 📖 User Guide\n- 🛠️ Troubleshooting\n- 📞 Contact Support"
    }
  ]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  // Enquiry Form states
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Auto-scroll to bottom when messages change
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Business hours: 9 AM to 5 PM
  const currentHour = new Date().getHours();
  const withinBusinessHours = currentHour >= 9 && currentHour < 17;

  // =============== Chat Handling ===============
  const handleSend = (text?: string) => {
    const userMessage = text || input;
    if (userMessage.trim() === '') return;

    // Attempt partial matching with known keys
    const matchedKey = Object.keys(responses).find((key) =>
      userMessage.toLowerCase().includes(key.toLowerCase())
    );
    const botResponse = matchedKey
      ? responses[matchedKey]
      : "I don't have an exact answer for that, but feel free to put the enquiry in the form below! :)";

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: botResponse }
    ]);
    setInput('');
  };

  // =============== Form Submission Handling ===============
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const currentEndpoint = endpoints[Math.floor(submissionCount / 50) % endpoints.length];
    submissionCount++;

    try {
      await fetch(currentEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitStatus('success');

      // Close form after a short delay and reset fields
      setTimeout(() => {
        setFormOpen(false);
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      }, 1500);
    } catch (error) {
      console.error('Submission error', error);
      setSubmitStatus('idle');
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* The Chat Trigger Button */}
      {!chatOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setChatOpen(true)}
          className="p-4 bg-green-600 text-white rounded-full shadow-lg flex items-center gap-2 hover:bg-green-700"
        >
          <MessageSquare size={20} />
          <span className="ml-2 flex items-center gap-1">
            {withinBusinessHours ? 'We are online' : 'Ask if'}
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          </span>
        </motion.button>
      )}

      {/* The Chat Window */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-[400px] bg-gray-100 shadow-xl rounded-2xl p-4 fixed bottom-5 right-5 border border-gray-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="https://i.imgur.com/hcGhaFK.png"
                alt="Company Logo"
                width={30}
                height={30}
              />
              <h2 className="font-semibold">Chat Assistant</h2>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-red-500">
              ✕
            </button>
          </div>

          {/* Message display */}
          <div className="h-56 overflow-y-auto mt-3 p-2 border rounded bg-white">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`my-1 p-2 rounded ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              ></motion.div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Suggestions (some sample keys from responses, ignoring first 3 in case they're business types) */}
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.keys(responses)
              .filter(
                (key) =>
                  key !== 'ecommerce' &&
                  key !== 'saas' &&
                  key !== 'local'
              )
              .map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(suggestion)}
                  className="px-3 py-1 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                >
                  {suggestion}
                </button>
              ))}
          </div>

          {/* Input for user message */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="w-full p-2 border rounded mt-2"
          />
          <button
            onClick={() => handleSend()}
            className="w-full p-2 mt-2 bg-blue-600 text-white rounded"
          >
            Send
          </button>

          {/* Enquiry Form trigger inside chat */}
          <button
            onClick={() => {
              setFormOpen(true);
              setSubmitStatus('idle');
            }}
            className="w-full p-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Enquiry Form
          </button>
        </motion.div>
      )}

      {/* Enquiry Form Modal */}
      {formOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300 relative">
            {/* Close form button */}
            <button
              onClick={() => {
                setFormOpen(false);
                setSubmitStatus('idle');
              }}
              className="absolute top-2 right-2 text-red-500"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://i.imgur.com/hcGhaFK.png"
                alt="Company Logo"
                width={40}
                height={40}
              />
              <h2 className="text-lg font-semibold">Enquiry Form</h2>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Business Name"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                required
                className="p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="p-2 border rounded"
              ></textarea>

              <motion.button
                type="submit"
                className="p-2 text-white rounded"
                animate={{
                  backgroundColor:
                    submitStatus === 'submitting'
                      ? '#fb923c' // orange-500
                      : submitStatus === 'success'
                      ? '#22c55e' // green-500
                      : '#3b82f6', // blue-600 (idle)
                }}
              >
                {submitStatus === 'submitting'
                  ? 'Submitting...'
                  : submitStatus === 'success'
                  ? 'Success!'
                  : 'Submit'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}






