import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useInView } from "@/hooks/useInView";
import { cacheVideo, getVideoFromCache } from "@/utils/videoCache";
import Head from "next/head";

const Contact: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [sectionRef, isInView] = useInView({
    threshold: 0.4,
  });
  const [introVideoUrl, setIntroVideoUrl] = useState("/black_global_Video.mp4");
  const [bgVideoUrl, setBgVideoUrl] = useState("/wavescom.mp4");

  // Preload and cache videos
  useEffect(() => {
    const preloadVideos = async () => {
      await Promise.all([
        cacheVideo("/black_global_Video.mp4"),
        cacheVideo("/wavescom.mp4"),
      ]);

      const [cachedIntroUrl, cachedBgUrl] = await Promise.all([
        getVideoFromCache("/black_global_Video.mp4"),
        getVideoFromCache("/wavescom.mp4"),
      ]);

      setIntroVideoUrl(cachedIntroUrl);
      setBgVideoUrl(cachedBgUrl);
    };

    preloadVideos();

    return () => {
      if (introVideoUrl.startsWith("blob:")) URL.revokeObjectURL(introVideoUrl);
      if (bgVideoUrl.startsWith("blob:")) URL.revokeObjectURL(bgVideoUrl);
    };
  }, []);

  // Handle video playback when section comes into view
  useEffect(() => {
    if (isInView && videoRef.current) {
      // Start playing intro video
      setIsPlayingIntro(true);
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 2.0; // Faster playback

      // Start the video
      videoRef.current.play();

      // Hide intro video after duration
      const hideTimer = setTimeout(() => {
        setIsPlayingIntro(false);
      }, 2000); // Adjusted for 2x speed

      return () => clearTimeout(hideTimer);
    }
  }, [isInView]);

  const ourHeadingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  const contactHeadingVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.2,
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
        ref={sectionRef}
        className="relative w-full min-h-screen overflow-hidden"
      >
        {/* Intro Video Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full z-50 bg-black transition-opacity duration-700 ${
            isPlayingIntro && isInView
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={introVideoUrl}
            muted
            playsInline
          />
        </div>

        {/* Main Content - Always visible */}
        <div className="w-full h-full">
          <div
            className="relative w-full h-full min-h-screen flex items-center py-12 md:py-24 px-4 md:px-8 lg:px-16"
            id="#contact"
          >
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src={bgVideoUrl}
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Overlay to Darken Video */}
            <div className="absolute bottom-0 left-0 w-full h-full gradient-overlay opacity-70 z-10"></div>

            {/* Main Content Container */}
            {/* <div className="container mx-auto max-w-6xl my-8 md:my-12">
            
              <div className="flex justify-center items-center space-x-4 mb-16 relative z-20 blend">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={ourHeadingVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl merichfont textcolor"
                >
                  CONTACT
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={contactHeadingVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl outline-text merichfont"
                >
                  US
                </motion.span>
              </div>

              <div className="flex flex-col md:flex-row gap-12 justify-center relative z-20 mt-8 mb-12">
               
              </div>
            </div> */}
            <div className="container mx-auto max-w-6xl my-8 md:my-12">
              <div className="flex justify-center items-center space-x-4 mb-16 relative z-20 blend">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={ourHeadingVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  merichfont textcolor"
                >
                  CONTACT
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={contactHeadingVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  outline-text merichfont"
                >
                  US
                </motion.span>
              </div>

              {/* Overlay to Darken Video */}
              <div className="absolute bottom-0 left-0 w-full h-full gradient-overlay opacity-70 z-10"></div>

              <div className="flex flex-col md:flex-row gap-12 justify-center relative z-20 mt-8 mb-12">
                {/* Contact Details Column */}
                <div className="w-full md:w-1/3 bg-[rgba(0,0,0,0.4)] text-beige p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="grid grid-cols-1 gap-6 text-center justify-center">
                    <div className="flex flex-col items-center hover:text-primary">
                      <FaMapMarkerAlt className="contact-icon mb-4 text-4xl text-primary " />
                      <span className="text-lg roboto font-bold">
                        22 Sin Ming Lane, #06-76 Midview City, Singapore 573969.
                      </span>
                    </div>
                    <div className="flex flex-col items-center hover:text-primary justify-center">
                      <FaEnvelope className="contact-icon mb-4 text-4xl text-primary " />
                      <span className="text-lg roboto font-bold">
                        support@webdaddy.sg
                      </span>
                    </div>
                    <div className="flex flex-col items-center hover:text-primary justify-center">
                      <FaPhone className="contact-icon mb-4 text-4xl text-primary " />
                      <span className="text-lg roboto font-bold">
                        +65-88061007
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Form Column */}
                <div className="w-full md:w-1/2 bg-[rgba(0,0,0,0.4)] text-beige p-8 rounded-lg shadow-md">
                  <form action="#" method="POST" className="space-y-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-lg font-medium text-beige roboto font-bold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // placeholder="Enter your full name"
                        className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-lg font-medium text-beige roboto font-bold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        // placeholder="Enter your email"
                        className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
                      />
                    </div>

                    {/* Country Code and Phone Number */}
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Country Code Dropdown */}
                      <div className="flex flex-col w-full md:w-1/3">
                        <label
                          htmlFor="country_code"
                          className="text-lg font-medium roboto font-bold"
                        >
                          Country Code
                        </label>
                        <select
                          id="country_code"
                          name="country_code"
                          className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige roboto font-bold"
                        >
                          <option value="+65">+65</option>
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col w-full md:w-2/3">
                        <label
                          htmlFor="phone"
                          className="text-lg font-medium roboto font-bold"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          // placeholder="Enter your phone number"
                          className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige roboto font-bold"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-lg font-medium roboto font-bold"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        // placeholder="Enter your message"
                        rows={4}
                        className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="px-16 py-2 bg-[rgba(0,0,0,0)] border-2 border-beige text-beige roboto font-bold rounded-lg hover:bg-[#e2dcc8] hover:text-[#282828] focus:outline-none transition-all"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Social Media Icons - Moved outside and below both columns */}
              <div className="w-full relative z-20 mt-8">
                <div className="card-mobile flex gap-4 justify-center items-center">
                  <Link
                    href="https://www.linkedin.com/company/your-company"
                    className="socialContainer containerfour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 448 512"
                      className="socialSvg linkedinSvg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </Link>

                  <Link
                    className="socialContainer containerTwo"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61561948965856"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 320 512"
                      className="socialSvg facebookSvg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </Link>

                  <Link
                    href="https://www.tiktok.com/@your-tiktok"
                    className="socialContainer containerThree"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 448 512" className="socialSvg tiktokSvg">
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                    </svg>
                  </Link>

                  <Link
                    href="https://www.instagram.com/your-instagram"
                    className="socialContainer containerOne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </Link>

                  <Link
                    href="https://www.youtube.com/your-channel"
                    className="socialContainer containerFive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 576 512" className="socialSvg youtubeSvg">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

// import { FC, useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";
// import { useInView } from "@/hooks/useInView";
// import { cacheVideo, getVideoFromCache } from "@/utils/videoCache";
// import Head from "next/head";

// const Contact: FC = () => {
//   const [showContent, setShowContent] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [sectionRef, isInView] = useInView({
//     threshold: 0.4,
//   });
//   const [introVideoUrl, setIntroVideoUrl] = useState("/black_global_Video.mp4");
//   const [bgVideoUrl, setBgVideoUrl] = useState("/wavescom.mp4");

//   // Preload and cache videos
//   useEffect(() => {
//     const preloadVideos = async () => {
//       // Cache both videos
//       await Promise.all([
//         cacheVideo("/black_global_Video.mp4"),
//         cacheVideo("/wavescom.mp4"),
//       ]);

//       // Get cached URLs
//       const [cachedIntroUrl, cachedBgUrl] = await Promise.all([
//         getVideoFromCache("/black_global_Video.mp4"),
//         getVideoFromCache("/wavescom.mp4"),
//       ]);

//       setIntroVideoUrl(cachedIntroUrl);
//       setBgVideoUrl(cachedBgUrl);
//     };

//     preloadVideos();

//     // Cleanup
//     return () => {
//       if (introVideoUrl.startsWith("blob:")) URL.revokeObjectURL(introVideoUrl);
//       if (bgVideoUrl.startsWith("blob:")) URL.revokeObjectURL(bgVideoUrl);
//     };
//   }, []);

//   useEffect(() => {
//     if (isInView && videoRef.current) {
//       // Reset content visibility
//       setShowContent(false);

//       // Reset video to beginning
//       videoRef.current.currentTime = 0;

//       // Set playback speed to 1.5x
//       videoRef.current.playbackRate = 1.5;

//       // Play the video
//       videoRef.current.play();

//       // Set timeout to show content after video (adjusted for 1.5x playback)
//       const timer = setTimeout(() => {
//         setShowContent(true);
//       }, 3300); // Adjusted for 1.5x speed (5000ms / 1.5 ≈ 3300ms)

//       return () => clearTimeout(timer);
//     }
//   }, [isInView]);

//   const ourHeadingVariants = {
//     hidden: {
//       opacity: 0,
//       x: -100,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//         delay: 0.2,
//       },
//     },
//   };

//   const contactHeadingVariants = {
//     hidden: {
//       opacity: 0,
//       x: 100,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//         delay: 0.2,
//       },
//     },
//   };

//   return (
//     <>
//       <Head>
//         <title>WEBDADDY | A Business Creation Digital Agency</title>
//         <meta name="description" content="A Business Creation Digital Agency" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" />
//       </Head>

//       <section
//         ref={sectionRef}
//         className="relative w-full min-h-screen overflow-hidden"
//       >
//         {/* Intro Video */}
//         <div
//           className={`fixed top-0 left-0 w-full h-full z-50 bg-black transition-opacity duration-1000 ${
//             showContent || !isInView
//               ? "opacity-0 pointer-events-none"
//               : "opacity-100"
//           }`}
//         >
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             src={introVideoUrl}
//             muted
//             playsInline
//             onEnded={() => setShowContent(true)}
//           />
//         </div>

//         {/* Main Content */}
//         <div
//           className={`w-full h-full transition-opacity duration-1000 ${
//             showContent ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div
//             className="relative w-full h-full min-h-screen flex items-center py-12 md:py-24 px-4 md:px-8 lg:px-16"
//             id="#contact"
//           >
//             {/* Background Video */}
//             <video
//               className="absolute top-0 left-0 w-full h-full object-cover z-0"
//               src={bgVideoUrl}
//               autoPlay
//               loop
//               muted
//               playsInline
//             />

//             <div className="container mx-auto max-w-6xl my-8 md:my-12">
//               <div className="flex justify-center items-center space-x-4 mb-16 relative z-20 blend">
//                 <motion.span
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false, amount: 0.1 }}
//                   variants={ourHeadingVariants}
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  merichfont textcolor"
//                 >
//                   CONTACT
//                 </motion.span>
//                 <motion.span
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false, amount: 0.1 }}
//                   variants={contactHeadingVariants}
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  outline-text merichfont"
//                 >
//                   US
//                 </motion.span>
//               </div>

//               {/* Overlay to Darken Video */}
//               <div className="absolute bottom-0 left-0 w-full h-full gradient-overlay opacity-70 z-10"></div>

//               <div className="flex flex-col md:flex-row gap-12 justify-center relative z-20 mt-8 mb-12">
//                 {/* Contact Details Column */}
//                 <div className="w-full md:w-1/3 bg-[rgba(0,0,0,0.4)] text-beige p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
//                   <div className="grid grid-cols-1 gap-6 text-center justify-center">
//                     <div className="flex flex-col items-center hover:text-primary">
//                       <FaMapMarkerAlt className="contact-icon mb-4 text-4xl text-primary " />
//                       <span className="text-lg roboto font-bold">
//                         22 Sin Ming Lane, #06-76 Midview City, Singapore 573969.
//                       </span>
//                     </div>
//                     <div className="flex flex-col items-center hover:text-primary justify-center">
//                       <FaEnvelope className="contact-icon mb-4 text-4xl text-primary " />
//                       <span className="text-lg roboto font-bold">
//                         support@webdaddy.sg
//                       </span>
//                     </div>
//                     <div className="flex flex-col items-center hover:text-primary justify-center">
//                       <FaPhone className="contact-icon mb-4 text-4xl text-primary " />
//                       <span className="text-lg roboto font-bold">
//                         +65-88061007
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Contact Form Column */}
//                 <div className="w-full md:w-1/2 bg-[rgba(0,0,0,0.4)] text-beige p-8 rounded-lg shadow-md">
//                   <form action="#" method="POST" className="space-y-6">
//                     {/* Name */}
//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="name"
//                         className="text-lg font-medium text-beige roboto font-bold"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         // placeholder="Enter your full name"
//                         className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
//                       />
//                     </div>

//                     {/* Email */}
//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="email"
//                         className="text-lg font-medium text-beige roboto font-bold"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         // placeholder="Enter your email"
//                         className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
//                       />
//                     </div>

//                     {/* Country Code and Phone Number */}
//                     <div className="flex flex-col md:flex-row gap-4">
//                       {/* Country Code Dropdown */}
//                       <div className="flex flex-col w-full md:w-1/3">
//                         <label
//                           htmlFor="country_code"
//                           className="text-lg font-medium roboto font-bold"
//                         >
//                           Country Code
//                         </label>
//                         <select
//                           id="country_code"
//                           name="country_code"
//                           className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige roboto font-bold"
//                         >
//                           <option value="+65">+65</option>
//                           <option value="+91">+91</option>
//                           <option value="+1">+1</option>
//                           <option value="+44">+44</option>
//                           {/* Add more options as needed */}
//                         </select>
//                       </div>

//                       {/* Phone Number */}
//                       <div className="flex flex-col w-full md:w-2/3">
//                         <label
//                           htmlFor="phone"
//                           className="text-lg font-medium roboto font-bold"
//                         >
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           // placeholder="Enter your phone number"
//                           className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige roboto font-bold"
//                         />
//                       </div>
//                     </div>

//                     {/* Message */}
//                     <div className="flex flex-col">
//                       <label
//                         htmlFor="message"
//                         className="text-lg font-medium roboto font-bold"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         // placeholder="Enter your message"
//                         rows={4}
//                         className="p-2 border-b-2 border-beige focus:outline-none focus:border-primary transition-all bg-[rgba(0,0,0,0)] text-beige"
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-center">
//                       <button
//                         type="submit"
//                         className="px-16 py-2 bg-[rgba(0,0,0,0)] border-2 border-beige text-beige roboto font-bold rounded-lg hover:bg-[#e2dcc8] hover:text-[#282828] focus:outline-none transition-all"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               {/* Social Media Icons - Moved outside and below both columns */}
//               <div className="w-full relative z-20 mt-8">
//                 <div className="card-mobile flex gap-4 justify-center items-center">
//                   <Link
//                     href="https://www.linkedin.com/company/your-company"
//                     className="socialContainer containerfour"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg
//                       viewBox="0 0 448 512"
//                       className="socialSvg linkedinSvg"
//                     >
//                       <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
//                     </svg>
//                   </Link>

//                   <Link
//                     className="socialContainer containerTwo"
//                     target="_blank"
//                     href="https://www.facebook.com/profile.php?id=61561948965856"
//                     rel="noopener noreferrer"
//                   >
//                     <svg
//                       viewBox="0 0 320 512"
//                       className="socialSvg facebookSvg"
//                     >
//                       <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
//                     </svg>
//                   </Link>

//                   <Link
//                     href="https://www.tiktok.com/@your-tiktok"
//                     className="socialContainer containerThree"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg viewBox="0 0 448 512" className="socialSvg tiktokSvg">
//                       <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
//                     </svg>
//                   </Link>

//                   <Link
//                     href="https://www.instagram.com/your-instagram"
//                     className="socialContainer containerOne"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
//                       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
//                     </svg>
//                   </Link>

//                   <Link
//                     href="https://www.youtube.com/your-channel"
//                     className="socialContainer containerFive"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg viewBox="0 0 576 512" className="socialSvg youtubeSvg">
//                       <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;
