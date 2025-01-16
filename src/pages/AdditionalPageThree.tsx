import { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const AdditionalPageThree: FC = () => {
  const [numberOfLines, setNumberOfLines] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm
        setNumberOfLines(5);
      } else if (width < 1024) {
        // md
        setNumberOfLines(8);
      } else if (width < 1536) {
        // lg
        setNumberOfLines(10);
      } else {
        // xl and above
        setNumberOfLines(10);
      }
    };
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
    return () => clearTimeout(timer);
  }, []);

  // form details
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    setIsPopupOpen(false);
  };
  const headingVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90, // Start flipped 90 degrees
      scale: 0.8, // Slightly smaller
    },
    visible: {
      opacity: 1,
      rotateX: 0, // Rotate back to original position
      scale: 1, // Full size
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      },
    },
  };
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90, // Start flipped 90 degrees
      scale: 0.9, // Slightly smaller than heading
    },
    visible: {
      opacity: 1,
      rotateX: 0, // Rotate back to original position
      scale: 1, // Full size
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      },
    },
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90, // Start flipped 90 degrees
      scale: 0.7, // Start smaller
    },
    visible: {
      opacity: 1,
      rotateX: 0, // Rotate back to original position
      scale: 1, // Full size
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.6,
      },
    },
  };
  return (
    <>
      {isLoading && <Loader />}
      {/* Your existing page content */}
      <section className="min-h-screen md:min-h-[400px] w-full flex items-center justify-center bg-[#2c2b2b] text-white p-8 overflow-hidden relative">
        {/* Animated Lines Container */}
        <div className="lines absolute inset-0 w-screen mx-auto">
          {Array.from({ length: numberOfLines }).map((_, index) => {
            // Adjust the spread of lines based on the number of lines
            const spreadFactor = numberOfLines > 8 ? 120 : 150;
            const percentage =
              (index / (numberOfLines - 1)) * spreadFactor - spreadFactor / 2;
            return (
              <div
                key={index}
                className="line absolute w-[1px] h-[200vh] -top-[60vh]"
                style={{
                  left: "50%",
                  marginLeft: `${percentage}%`,
                  background: "rgba(255, 255, 255, 0.1)",
                  transform: "rotate(35deg)",
                  animationDelay: `${index * 0.3}s`,
                }}
              />
            );
          })}
        </div>
        {/* Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left side*/}
          <div className="flex-1 space-y-6 text-center md:text-left w-full md:w-[80%] md:pl-8 lg:pl-16 xl:pl-28">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={headingVariants}
              className="text-4xl textcolor robototwo"
            >
              Did you know sites with top-notch design and content are 53% more
              likely to hit Google's first page? Ready to boost your rankings?
            </motion.h2>
          </div>
          {/* Right side */}
          <div className="flex-1 space-y-6 text-center md:text-left w-full md:w-[20%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={buttonVariants}
              className="flex md:justify-end justify-center"
            >
              <div
                className="flex justify-center APO-chat-button"
                onClick={() => setIsPopupOpen(true)}
              >
                Let's Create
              </div>
            </motion.div>
          </div>
        </div>
        {/* Contact Popup */}
        <div className={`popup-overlay ${isPopupOpen ? "open" : ""}`}>
          <div className="popup-container" style={{ padding: "2rem" }}>
            <button
              className="close-button text-black"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </button>
            <h2 className="text-2xl mb-8 textcolor Montserrat">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  className="styled-input placeholder-[#4e4e4e]"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  className="styled-input placeholder-[#4e4e4e]"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="input-wrapper w-1/3">
                  <select
                    className="styled-input text-[#4e4e4e]"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                  >
                    <option value="" className="text-[#4e4e4e]">
                      Select Code
                    </option>
                    <option value="+65">+65</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <div className="input-wrapper w-2/3">
                  <input
                    className="styled-input placeholder-[#4e4e4e]"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <textarea
                  className="styled-input placeholder-[#4e4e4e]"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

// import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader";
// import Head from "next/head";

// const AdditionalPageThree: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>WEBDADDY | A Business Creation Digital Agency</title>
//         <meta name="description" content="A Business Creation Digital Agency" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" />
//       </Head>
//       {isLoading && <Loader />}
//       {/* Your existing page content */}
//     </>
//   );
// };

export default AdditionalPageThree;
