import React, { useState, useEffect } from "react";
import { FC } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Head from "next/head";

const AdditionalPageTwo: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
      x: 100, // Start from right side
      scale: 0.5, // Start small
    },
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      scale: 1, // Scale to full size
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Start from right side
      scale: 0.7, // Start smaller than heading
    },
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      scale: 1, // Scale to full size
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Start from right side
      y: 100, // Start from bottom
      scale: 0.5, // Start small
    },
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      y: 0, // Move to original position
      scale: 1, // Scale to full size
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
        delay: 0.6,
      },
    },
  };

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" /> */}
      </Head>

      {isLoading && <Loader />}
      <section className="min-h-screen md:min-h-[400px] w-full flex items-center justify-center bg-white text-black p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left side - Ripple Effect */}
          <div className="flex-1 relative w-full min-h-[300px] md:min-h-auto items-center justify-center">
            <div className="APT-ripple-buttons">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Placeholder for potential content */}
            </div>
          </div>

          {/* Right side - Marketing Text */}
          <div className="flex-1 space-y-6 text-center md:text-left w-full md:w-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={headingVariants}
              className="text-4xl textcolotwo font-bold robototwo"
            >
              The power of digital marketing carries a compounding ripple effect
              on your online marketing efforts. We aim to 10X your ROI and
              revenue goals.
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={buttonVariants}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-72 px-6 py-3 
                  border-2 border-[#4e4e4e] text-[#4e4e4e]
                  hover:bg-[#26d3b4] hover:text-white 
                  transition-all duration-300 
                  relative overflow-hidden
                  rounded-lg 
                  group
                  focus:outline-none"
                onClick={() => setIsPopupOpen(true)}
              >
                <span className="relative z-10 font-bold textcolotwo text-lg md:text-xl robototwo ">
                  Talk to Us
                </span>
                <span
                  className="absolute inset-0 bg-[#26d3b4] transform -translate-x-full 
                    group-hover:translate-x-0 
                    transition-transform duration-300 
                    z-0"
                ></span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Contact Popup */}
        <div className={`popup-overlay ${isPopupOpen ? "open" : ""}`}>
          <div className="popup-container" style={{ padding: "2rem" }}>
            <button
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </button>

            <h2 className="text-2xl mb-8 textcolor">Contact Us</h2>

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

export default AdditionalPageTwo;
