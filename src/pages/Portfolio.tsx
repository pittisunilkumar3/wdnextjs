import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// Define a type for project data
interface Portfolio {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  link: string;
}

// Array of project data
const portfolioItems: Portfolio[] = [
  {
    id: 1,
    title: "LOANWISE",
    description: "",
    image: "/images/loanwise_7_11zon_14_11zon.webp",
    imagePosition: "right",
    link: "http://loanwise.sg/",
  },
  {
    id: 2,
    title: "SWINGTALENT",
    description: "",
    image: "/images/swingtalent_16_11zon_22_11zon.webp",
    imagePosition: "left",
    link: "https://swingtalent.sg/",
  },
  {
    id: 3,
    title: "BAVET",
    description: "Restaurant Business",
    image: "/images/BAVET_WEB_PIC_2_11zon_10_11zon.webp",
    imagePosition: "right",
    link: "https://bavet.eu/",
  },
  {
    id: 4,
    title: "SIGHTBOX",
    description: "Branding Agency",
    image: "/images/sightbox_web_pic_15_11zon_21_11zon.webp",
    imagePosition: "left",
    link: "https://sightbox.co/",
  },
  {
    id: 5,
    title: "GIGANTIC CANDY",
    description: "Ecommerce",
    image: "/images/giganticcandy_web_pic_5_11zon_12_11zon.webp",
    imagePosition: "right",
    link: "https://giganticcandy.com/",
  },
  {
    id: 6,
    title: "DAYAWAY",
    description: "Travel Membership",
    image: "/images/mydayaway_web_pic_14_11zon_20_11zon.webp",
    imagePosition: "left",
    link: "https://www.mydayaway.com/",
  },
  {
    id: 7,
    title: "ARCH - Motorcycle",
    description: "Automobile",
    image: "/images/archmotorcycle_web_pic_1_11zon_9_11zon.webp",
    imagePosition: "right",
    link: "https://archmotorcycle.com/",
  },
];

export default function Portfolio() {
  const latestVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projectsVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const projectImageVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectTextVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
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

      <section
        className="min-h-screen w-full bg-[#282828] flex flex-col items-center justify-center py-20"
        id="#portfolio"
      >
        {/* Heading Section */}
        <div className="container max-w-6xl mx-auto text-center mb-20">
          <div className="flex justify-center items-baseline mb-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont textcolor inline-block"
              initial="hidden"
              whileInView="visible"
              variants={latestVariants}
              viewport={{ once: false, amount: 0.1 }}
            >
              PORT
            </motion.h1>
            <motion.span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont outline-text ml-4 inline-block"
              initial="hidden"
              whileInView="visible"
              variants={projectsVariants}
              viewport={{ once: false, amount: 0.1 }}
            >
              FOLIO
            </motion.span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start md:space-y-22">
          {portfolioItems.map((project, index) => (
            <React.Fragment key={project.id}>
              {project.imagePosition === "left" ? (
                <>
                  {/* Desktop View - Image Left, Text Right */}
                  <motion.div
                    className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
                    initial="hidden"
                    whileInView="visible"
                    variants={projectImageVariants}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <div className="p-6">
                      <img
                        src={project.image}
                        alt={`${project.title} Showcase`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* Text Container - Right for Desktop */}
                  <motion.div
                    className="hidden md:flex space-y-6  text-center flex-col items-center justify-center pl-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={projectTextVariants}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <h1 className="text-4xl  mb-4 merichfont textcolor">
                      {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 max-w-md textcolor roboto font-bold">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 group-hover:-translate-x-1 transition-transform rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Mobile View - Stacked Layout */}
                  <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-6">
                    <div className="w-full max-w-lg mx-auto">
                      <motion.div
                        className="w-full relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
                        initial="hidden"
                        whileInView="visible"
                        variants={projectImageVariants}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <div className="p-3">
                          <img
                            src={project.image}
                            alt={`${project.title} Showcase`}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        className="text-white text-center mt-8 w-full px-4"
                        initial="hidden"
                        whileInView="visible"
                        variants={projectTextVariants}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <h1 className="text-3xl  mb-2 merichfont textcolor">
                          {project.title}
                        </h1>
                        <p className="text-base text-gray-300 max-w-md mx-auto mb-2 textcolor roboto font-bold">
                          {project.description}
                        </p>
                        <div className="flex justify-center">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 group-hover:-translate-x-1 transition-transform rotate-180"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop View - Text Left, Image Right */}
                  <motion.div
                    className="hidden md:flex space-y-6 text-white text-center flex-col items-center justify-center pr-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={projectTextVariants}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <h1 className="text-4xl  mb-4 merichfont textcolor">
                      {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 max-w-md textcolor roboto font-bold">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
                    initial="hidden"
                    whileInView="visible"
                    variants={projectImageVariants}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <div className="p-6">
                      <img
                        src={project.image}
                        alt={`${project.title} Showcase`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* Mobile View - Stacked Layout */}
                  <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-6">
                    <div className="w-full max-w-lg mx-auto">
                      <motion.div
                        className="w-full relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
                        initial="hidden"
                        whileInView="visible"
                        variants={projectImageVariants}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <div className="p-3">
                          <img
                            src={project.image}
                            alt={`${project.title} Showcase`}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        className="text-white text-center mt-8 w-full px-4"
                        initial="hidden"
                        whileInView="visible"
                        variants={projectTextVariants}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <h1 className="text-3xl  mb-2 merichfont textcolor">
                          {project.title}
                        </h1>
                        <p className="text-base text-gray-300 max-w-md mx-auto mb-2 textcolor roboto font-bold">
                          {project.description}
                        </p>
                        <div className="flex justify-center">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 group-hover:-translate-x-1 transition-transform rotate-180"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </>
              )}

              {/* Full-width Line */}
              {index < portfolioItems.length - 1 && (
                <motion.div
                  className="col-span-2 w-full h-[1px] bg-[#e2dcc8]  my-10 overflow-hidden md:my-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
