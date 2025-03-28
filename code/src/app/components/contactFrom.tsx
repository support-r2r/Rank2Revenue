"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/animations/contact-us-subtle.json";
import { CheckCircle } from "react-feather";

const DottedButton: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className = "" }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`rounded-full border-2 border-dashed border-indigo-600 bg-white px-6 py-3 text-indigo-600 font-semibold shadow-sm hover:bg-indigo-100 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.button>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      alert("An error occurred.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (type: string) => {
    const links: Record<string, () => void> = {
      call: () => (window.location.href = "tel:+61481958385"),
      email: () => (window.location.href = "mailto:admin@rank2revenue.com.au"),
      schedule: () => window.open("https://your-scheduling-link.com", "_blank"),
    };
    links[type]?.();
  };

  return (
    <section className="w-full bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Info Panel */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 px-8 py-16 flex flex-col justify-center items-start gap-10"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">Let&apos;s bring your project to life. Reach out and we&apos;ll get back to you quickly.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <DottedButton onClick={() => handleButtonClick("call")}>Call Us</DottedButton>
          <DottedButton onClick={() => handleButtonClick("email")}>Email</DottedButton>
          <DottedButton onClick={() => handleButtonClick("schedule")}>Schedule</DottedButton>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Phone:</strong> +61 481 958 385</p>
          <p><strong>Email:</strong> admin@rank2revenue.com.au</p>
          <p><strong>Location:</strong> Macquarie Park, NSW 2113</p>
        </div>
      </motion.div>

      {/* Right Form Panel */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 px-6 py-12 flex flex-col justify-center items-center bg-indigo-50"
      >
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Message Us</h2>
          {!success ? (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message..."
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-3 transition font-medium"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-4 py-12">
              <CheckCircle className="text-green-500" size={48} />
              <p className="text-xl font-semibold text-gray-800">Thank you! We&apos;ll be in touch shortly.</p>
            </div>
          )}
        </div>
        <div className="mt-8 w-full max-w-sm">
          <Lottie animationData={contactAnimation} loop autoplay />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import contactAnimation from "../../../public/animations/contact-us-subtle.json";
// import { CheckCircle } from "react-feather";

// const DottedButton: React.FC<{
//   onClick?: () => void;
//   children: React.ReactNode;
//   className?: string;
// }> = ({ onClick, children, className = "" }) => (
//   <motion.button
//     onClick={onClick}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className={`rounded-full border-2 border-dashed border-indigo-600 bg-white px-6 py-3 text-indigo-600 font-semibold shadow-sm hover:bg-indigo-100 transition-all duration-300 ${className}`}
//   >
//     {children}
//   </motion.button>
// );

// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const res = await fetch("/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         setSuccess(true);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Submission failed. Try again.");
//       }
//     } catch (err) {
//       alert("An error occurred.");
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleButtonClick = (type: string) => {
//     const links: Record<string, () => void> = {
//       call: () => (window.location.href = "tel:+61481958385"),
//       email: () => (window.location.href = "mailto:admin@rank2revenue.com.au"),
//       schedule: () => window.open("https://your-scheduling-link.com", "_blank"),
//     };
//     links[type]?.();
//   };

//   return (
//     <section className="w-full bg-white min-h-screen flex flex-col lg:flex-row">
//       {/* Left Info Panel */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="lg:w-1/2 px-8 py-16 flex flex-col justify-center items-start gap-10"
//       >
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">Get in Touch</h1>
//           <p className="text-lg text-gray-600">Let's bring your project to life. Reach out and we'll get back to you quickly.</p>
//         </div>
//         <div className="flex gap-3 flex-wrap">
//           <DottedButton onClick={() => handleButtonClick("call")}>Call Us</DottedButton>
//           <DottedButton onClick={() => handleButtonClick("email")}>Email</DottedButton>
//           <DottedButton onClick={() => handleButtonClick("schedule")}>Schedule</DottedButton>
//         </div>
//         <div className="text-sm text-gray-600 space-y-1">
//           <p><strong>Phone:</strong> +61 481 958 385</p>
//           <p><strong>Email:</strong> admin@rank2revenue.com.au</p>
//           <p><strong>Location:</strong> Macquarie Park, NSW 2113</p>
//         </div>
//       </motion.div>

//       {/* Right Form Panel */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="lg:w-1/2 px-6 py-12 flex flex-col justify-center items-center bg-indigo-50"
//       >
//         <div className="w-full max-w-xl">
//           <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Message Us</h2>
//           {!success ? (
//             <form onSubmit={handleSubmit} className="grid gap-5">
//               <input
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <input
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Email"
//                 className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Your message..."
//                 className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-3 transition font-medium"
//               >
//                 {isSubmitting ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           ) : (
//             <div className="flex flex-col items-center text-center gap-4 py-12">
//               <CheckCircle className="text-green-500" size={48} />
//               <p className="text-xl font-semibold text-gray-800">Thanks! We'll be in touch.</p>
//             </div>
//           )}
//         </div>
//         <div className="mt-8 w-full max-w-sm">
//           <Lottie animationData={contactAnimation} loop autoplay />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;

