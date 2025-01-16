// import React from "react";
// import { motion } from "framer-motion";
// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";

// // Define a type for project data
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   imagePosition: "left" | "right";
//   url: string;
// }

// // Array of project data
// const projectsData: Project[] = [
//   {
//     id: 1,
//     title: "INTERIOR DESIGN",
//     description: "Interior Design website",
//     image: "/lp-image-1.png",
//     imagePosition: "left",
//     url: "https://interior-design-by-jack.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "BOSTON CUSTOM FURNITURE",
//     description: "Furniture website",
//     image: "/lp-image-2.png",
//     imagePosition: "right",
//     url: "https://furniture-website-demowd.netlify.app/",
//   },
//   {
//     id: 3,
//     title: "ARK - ARCHITECTURE",
//     description: "Architecture Design",
//     image: "/lp-image-3.png",
//     imagePosition: "left",
//     url: "https://architecture-website-demo.netlify.app",
//   },
//   {
//     id: 4,
//     title: "INOX - KITCHEN",
//     description: "Interior Design website",
//     image: "/lp-image-4.png",
//     imagePosition: "right",
//     url: "http://kitchen-interior-demo.netlify.app",
//   },
//   {
//     id: 5,
//     title: "QUINTUS - ENGINEERING",
//     description: "Engineering Design",
//     image: "/lp-image-5.png",
//     imagePosition: "left",
//     url: "https://engineering-website-demo.netlify.app/",
//   },
// ];

// export default function Projects() {
//   // Animation variants remain the same...
//   const latestVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

//   const projectsVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
//   };

//   const paragraphVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
//   };

//   const projectImageVariants = {
//     hidden: { opacity: 0, y: -100 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const projectTextVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
//     },
//   };

//   return (
//     <>
//       <Head>
//         <title>WEBDADDY | A Business Creation Digital Agency</title>
//         <meta name="description" content="A Business Creation Digital Agency" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <section className="min-h-screen w-full bg-[#2c2b2b] flex flex-col items-center justify-center py-20">
//         {/* Heading Section */}
//         <div className="container max-w-6xl mx-auto text-center mb-20">
//           <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline mb-4">
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont textcolor"
//               initial="hidden"
//               whileInView="visible"
//               variants={latestVariants}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               LATEST
//             </motion.h1>
//             <motion.span
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont outline-text md:ml-4"
//               initial="hidden"
//               whileInView="visible"
//               variants={projectsVariants}
//               viewport={{ once: false, amount: 0.1 }}
//             >
//               PROJECTS
//             </motion.span>
//           </div>

//           <motion.p
//             className="text-xl text-gray-400 max-w-2xl mx-auto textcolor roboto font-bold"
//             initial="hidden"
//             whileInView="visible"
//             variants={paragraphVariants}
//             viewport={{ once: false, amount: 0.1 }}
//           >
//             These projects are our relentless pursuit of the latest design
//             trends in web development.
//           </motion.p>
//         </div>

//         {/* Projects Grid */}
//         <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start md:space-y-24">
//           {projectsData.map((project, index) => (
//             <React.Fragment key={project.id}>
//               {project.imagePosition === "left" ? (
//                 <>
//                   {/* Desktop View - Image Left, Text Right */}
//                   <motion.div
//                     className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={projectImageVariants}
//                     viewport={{ once: false, amount: 0.2 }}
//                   >
//                     <div className="p-6 relative aspect-video">
//                       <Image
//                         src={project.image}
//                         alt={`${project.title} Showcase`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                         priority={index === 0}
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Text Container - Right for Desktop */}
//                   <motion.div
//                     className="hidden md:flex space-y-6 text-white text-center flex-col items-center justify-center pl-10"
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={projectTextVariants}
//                     viewport={{ once: false, amount: 0.2 }}
//                   >
//                     <h1 className="text-4xl mb-4 merichfont textcolor">
//                       {project.title}
//                     </h1>
//                     <p className="text-lg text-gray-300 mb-6 max-w-md textcolor roboto font-bold">
//                       {project.description}
//                     </p>
//                     <div className="flex items-center space-x-4">
//                       <Link
//                         href={project.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 group-hover:-translate-x-1 transition-transform rotate-180"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </motion.div>

//                   {/* Mobile View - Stacked Layout */}
//                   <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-3">
//                     <div className="w-full max-w-lg mx-auto">
//                       <motion.div
//                         className="w-full relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={projectImageVariants}
//                         viewport={{ once: false, amount: 0.2 }}
//                       >
//                         <div className="p-3 relative aspect-video">
//                           <Image
//                             src={project.image}
//                             alt={`${project.title} Showcase`}
//                             fill
//                             sizes="100vw"
//                             className="object-cover transition-transform duration-300 group-hover:scale-105"
//                             priority={index === 0}
//                           />
//                         </div>
//                       </motion.div>

//                       <motion.div
//                         className="text-white text-center mt-8 w-full px-4"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={projectTextVariants}
//                         viewport={{ once: false, amount: 0.2 }}
//                       >
//                         <h1 className="text-3xl mb-2 merichfont textcolor">
//                           {project.title}
//                         </h1>
//                         <p className="text-base text-gray-300 max-w-md mx-auto mb-2 textcolor roboto font-bold">
//                           {project.description}
//                         </p>
//                         <div className="flex justify-center">
//                           <Link
//                             href={project.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-6 w-6 group-hover:translate-x-1 transition-transform"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Desktop View - Text Left, Image Right */}
//                   <motion.div
//                     className="hidden md:flex space-y-6 text-white text-center flex-col items-center justify-center pr-10"
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={projectTextVariants}
//                     viewport={{ once: false, amount: 0.2 }}
//                   >
//                     <h1 className="text-4xl mb-4 merichfont textcolor">
//                       {project.title}
//                     </h1>
//                     <p className="text-lg text-gray-300 mb-6 max-w-md textcolor roboto font-bold">
//                       {project.description}
//                     </p>
//                     <div className="flex items-center space-x-4">
//                       <Link
//                         href={project.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 group-hover:translate-x-1 transition-transform"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={projectImageVariants}
//                     viewport={{ once: false, amount: 0.2 }}
//                   >
//                     <div className="p-6 relative aspect-video">
//                       <Image
//                         src={project.image}
//                         alt={`${project.title} Showcase`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                         priority={index === 0}
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Mobile View - Stacked Layout */}
//                   <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-3">
//                     <div className="w-full max-w-lg mx-auto">
//                       <motion.div
//                         className="w-full relative group overflow-hidden rounded-lg shadow-lg border border-[#e2dcc8]"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={projectImageVariants}
//                         viewport={{ once: false, amount: 0.2 }}
//                       >
//                         <div className="p-3 relative aspect-video">
//                           <Image
//                             src={project.image}
//                             alt={`${project.title} Showcase`}
//                             fill
//                             sizes="100vw"
//                             className="object-cover transition-transform duration-300 group-hover:scale-105"
//                             priority={index === 0}
//                           />
//                         </div>
//                       </motion.div>

//                       <motion.div
//                         className="text-white text-center mt-8 w-full px-4"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={projectTextVariants}
//                         viewport={{ once: false, amount: 0.2 }}
//                       >
//                         <h1 className="text-3xl  mb-2 merichfont textcolor">
//                           {project.title}
//                         </h1>
//                         <p className="text-base text-gray-300 max-w-md mx-auto mb-2 textcolor roboto font-bold">
//                           {project.description}
//                         </p>
//                         <div className="flex justify-center">
//                           <Link
//                             href={project.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center justify-center w-12 h-12 bg-[#26d3b4] text-black hover:text-[#e2dcc8] rounded-full hover:bg-[rgb(0,0,0,0)] transition-colors duration-300 group"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-6 w-6 group-hover:translate-x-1 transition-transform"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Full-width Line */}
//               {index < projectsData.length - 1 && (
//                 <motion.div
//                   className="col-span-2 w-full h-[1px] bg-[#e2dcc8]  my-10 overflow-hidden md:my-10"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: false, amount: 0.2 }}
//                   transition={{
//                     duration: 0.8,
//                     ease: "easeInOut",
//                   }}
//                 ></motion.div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// Define a type for project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  url: string;
}

// Array of project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "INTERIOR DESIGN",
    description: "Interior Design website",
    image: "/images/lp-image-1_9_11zon_15_11zon.webp",
    imagePosition: "left",
    url: "https://interior-design-by-jack.netlify.app/",
  },
  {
    id: 2,
    title: "BOSTON CUSTOM FURNITURE",
    description: "Furniture website",
    image: "/images/lp-image-2_10_11zon_16_11zon.webp",
    imagePosition: "right",
    url: "https://furniture-website-demowd.netlify.app/",
  },
  {
    id: 3,
    title: "ARK - ARCHITECTURE",
    description: "Architecture Design",
    image: "/images/lp-image-3_11_11zon_17_11zon.webp",
    imagePosition: "left",
    url: "https://architecture-website-demo.netlify.app",
  },
  {
    id: 4,
    title: "INOX - KITCHEN",
    description: "Interior Design website",
    image: "/images/lp-image-4_12_11zon_18_11zon.webp",
    imagePosition: "right",
    url: "http://kitchen-interior-demo.netlify.app",
  },
  {
    id: 5,
    title: "QUINTUS - ENGINEERING",
    description: "Engineering Design",
    image: "/images/lp-image-5_13_11zon_19_11zon.webp",
    imagePosition: "left",
    url: "https://engineering-website-demo.netlify.app/",
  },
];

export default function Projects() {
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

      <section className="min-h-screen w-full bg-[#2c2b2b] flex flex-col items-center justify-center py-20">
        {/* Heading Section - Modified for responsive layout */}
        <div className="container max-w-6xl mx-auto text-center mb-20">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline mb-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont textcolor"
              initial="hidden"
              whileInView="visible"
              variants={latestVariants}
              viewport={{ once: false, amount: 0.1 }}
            >
              LATEST
            </motion.h1>
            <motion.span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont outline-text md:ml-4"
              initial="hidden"
              whileInView="visible"
              variants={projectsVariants}
              viewport={{ once: false, amount: 0.1 }}
            >
              PROJECTS
            </motion.span>
          </div>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto textcolor roboto font-bold"
            initial="hidden"
            whileInView="visible"
            variants={paragraphVariants}
            viewport={{ once: false, amount: 0.1 }}
          >
            These projects are our relentless pursuit of the latest design
            trends in web development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start md:space-y-24">
          {projectsData.map((project, index) => (
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
                    className="hidden md:flex space-y-6 text-white text-center flex-col items-center justify-center pl-10"
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
                        href={project.url}
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
                  <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-3">
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
                            href={project.url}
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
                        href={project.url}
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
                    className="hidden md:block relative group overflow-hidden rounded-lg shadow-lg  border border-[#e2dcc8]"
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
                  <div className="md:hidden w-full flex flex-col items-center justify-center px-4 ml-3">
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
                            href={project.url}
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
                    </div>
                  </div>
                </>
              )}

              {/* Full-width Line */}
              {index < projectsData.length - 1 && (
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
