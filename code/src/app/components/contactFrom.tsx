"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "react-feather";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/animations/contact-us.json";

interface DottedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const DottedButton: React.FC<DottedButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full shadow-md border-2 border-dashed border-indigo-600 bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50 transition-all duration-300 ${className}`}
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
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
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
    const actions: Record<string, () => void> = {
      call: () => (window.location.href = "tel:+61481958385"),
      email: () => (window.location.href = "mailto:admin@rank2revenue.com.au"),
      schedule: () => window.open("https://your-scheduling-link.com", "_blank"),
    };

    actions[type]?.();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      {/* Left Panel */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full px-6 py-12 lg:py-20 flex flex-col justify-center items-start gap-12 max-w-3xl mx-auto"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 leading-tight">
            Let's Collaborate
          </h1>
          <p className="text-lg text-gray-700">
            Whether you have a project in mind or just want to connect, drop us a message.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <DottedButton onClick={() => handleButtonClick("call")}>Call</DottedButton>
          <DottedButton onClick={() => handleButtonClick("email")}>Email</DottedButton>
          <DottedButton onClick={() => handleButtonClick("schedule")}>Book Meeting</DottedButton>
        </div>

        <div className="grid gap-2 text-sm text-gray-600">
          <p><strong>Phone:</strong> +61 481 958 385</p>
          <p><strong>Email:</strong> admin@rank2revenue.com.au</p>
          <p><strong>Location:</strong> Macquarie Park, NSW 2113</p>
        </div>
      </motion.div>

      {/* Right Panel - Form & Animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full px-6 py-12 lg:py-20 flex flex-col justify-center items-center bg-white shadow-inner"
      >
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Quick Message</h2>
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
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 transition"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
              <CheckCircle className="text-green-500" size={48} />
              <p className="text-xl font-semibold text-gray-800">Thank you! We'll be in touch shortly.</p>
            </div>
          )}
        </div>
        <div className="mt-10 w-full max-w-md">
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
// import Image from "next/image";
// import { CheckCircle } from "react-feather";

// interface DottedButtonProps {
//   onClick?: () => void;
//   children: React.ReactNode;
//   className?: string;
// }

// const DottedButton: React.FC<DottedButtonProps> = ({
//   onClick,
//   children,
//   className = "",
// }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`rounded-full shadow-md border-2 border-dashed border-indigo-600 bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50 transition-all duration-300 ${className}`}
//     >
//       {children}
//     </motion.button>
//   );
// };

// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("/api/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSuccess(true);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleButtonClick = (type: string) => {
//     const actions: Record<string, () => void> = {
//       call: () => (window.location.href = "tel:+61481958385"),
//       email: () => (window.location.href = "mailto:admin@rank2revenue.com.au"),
//       schedule: () => window.open("https://your-scheduling-link.com", "_blank"),
//     };

//     actions[type]?.();
//   };

//   return (
//     <section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
//       {/* Left Panel */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="lg:w-1/2 w-full px-6 py-12 lg:py-20 flex flex-col justify-center items-start gap-12 max-w-3xl mx-auto"
//       >
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 leading-tight">
//             Let's Collaborate
//           </h1>
//           <p className="text-lg text-gray-700">
//             Whether you have a project in mind or just want to connect, drop us a message.
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-4">
//           <DottedButton onClick={() => handleButtonClick("call")}>Call</DottedButton>
//           <DottedButton onClick={() => handleButtonClick("email")}>Email</DottedButton>
//           <DottedButton onClick={() => handleButtonClick("schedule")}>Book Meeting</DottedButton>
//         </div>

//         <div className="grid gap-2 text-sm text-gray-600">
//           <p><strong>Phone:</strong> +61 481 958 385</p>
//           <p><strong>Email:</strong> admin@rank2revenue.com.au</p>
//           <p><strong>Location:</strong> Macquarie Park, NSW 2113</p>
//         </div>
//       </motion.div>

//       {/* Right Panel - Form & Image */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="lg:w-1/2 w-full px-6 py-12 lg:py-20 flex flex-col justify-center items-center bg-white shadow-inner"
//       >
//         <div className="w-full max-w-xl">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Quick Message</h2>
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
//                 placeholder="Email Address"
//                 className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 rows={5}
//                 className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 transition"
//               >
//                 {isSubmitting ? "Sending..." : "Submit Message"}
//               </button>
//             </form>
//           ) : (
//             <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
//               <CheckCircle className="text-green-500" size={48} />
//               <p className="text-xl font-semibold text-gray-800">Thank you! We'll be in touch shortly.</p>
//             </div>
//           )}
//         </div>
//         <Image
//           src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
//           alt="Collaboration"
//           width={700}
//           height={500}
//           className="mt-10 rounded-lg shadow-md object-cover max-h-[350px]"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default ContactSection;