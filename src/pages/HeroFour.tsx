import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";

const HeroFour: React.FC = () => {
  const whoRef = useRef(null);
  const weRef = useRef(null);
  const areRef = useRef(null);
  const pRef = useRef(null);

  const whoInView = useInView(whoRef);
  const weInView = useInView(weRef);
  const areInView = useInView(areRef);
  const pInView = useInView(pRef);

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" /> */}
      </Head>

      <div className="w-full overflow-hidden">
        <div className="relative w-screen min-h-[100vh] flex flex-col justify-center py-2 md:py-2 px-4">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:space-y-12 lg:space-y-16 xl:space-y-24">
              {/* WHO Section remains unchanged */}
              {/* First Section: WHO */}
              <motion.div
                ref={whoRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: whoInView ? 1 : 0,
                  x: whoInView ? 0 : -100,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2, // First section appears with a slight initial delay
                }}
                className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-8"
              >
                <h1 className="text-3xl md:text-7xl lg:text-[9vw] font-bold textcolothree merichfont text-center md:text-left">
                  WHO
                </h1>
                <motion.p
                  ref={pRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: pInView ? 1 : 0 }}
                  transition={{
                    duration: 1,
                    delay: whoInView ? 0.6 : 0, // Paragraph appears after WHO section
                  }}
                  className="text-base md:text-xl roboto font-bold text-black text-center md:text-left"
                >
                  "We're a crew of digital wizards - web devs, SEO geeks, social
                  media mavens, and content creators -turning online ideas into
                  epic digital experiences. With a blend of creativity, AI and
                  tech magic, we make your brand shine!"
                </motion.p>
              </motion.div>

              {/* Modified WE Section for better small screen compatibility */}
              <motion.div
                ref={weRef}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: weInView ? 1 : 0,
                  y: weInView ? 0 : -100,
                }}
                transition={{
                  duration: 0.8,
                  delay: whoInView ? 1 : 0,
                }}
                className="flex flex-col md:flex-row items-center justify-between relative w-full py-0 md:py-0"
              >
                {/* Mobile: Centered Content */}
                <div className="flex flex-col items-center w-full md:hidden mb-2 relative px-2">
                  <h1 className="text-4xl sm:text-6xl font-bold stroke-text merichfont mb-2 text-center w-full">
                    WE
                  </h1>
                  <p className="text-base text-center roboto font-bold text-black max-w-md px-4">
                    "We believe branding, design, development, content and
                    visuals should be aligned and combined with the latest
                    technological advancements for business creation."
                  </p>
                </div>

                {/* Desktop/Tablet Layout - Modified for better visibility */}
                <div className="hidden md:flex w-full relative">
                  {/* Ripple effect container */}
                  <div className="absolute hidden lg:block left-0 w-1/3 h-full -top-8">
                    <div className="APT-ripple-buttonsone transform scale-75 lg:scale-100 origin-center">
                      <button></button>
                      <button></button>
                      <button></button>
                      <button></button>
                      <button></button>
                    </div>
                  </div>

                  {/* WE Text - Modified positioning and sizing */}
                  <div className="flex items-center justify-end space-x-4 md:space-x-6 w-full relative z-10 px-4">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-[8vw] 2xl:text-[9vw] font-bold stroke-text merichfont whitespace-nowrap">
                      WE
                    </h1>
                    <p className="text-lg md:text-xl max-w-sm roboto text-black font-bold leading-relaxed">
                      "We believe branding, design, development, content and
                      visuals should be aligned and combined with the latest
                      technological advancements for business creation."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ARE Section remains unchanged */}
              <motion.div
                ref={areRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: areInView ? 1 : 0,
                  x: areInView ? 0 : 100,
                }}
                transition={{
                  duration: 0.8,
                  delay: weInView ? 1.2 : 0,
                }}
                className="flex flex-col-reverse md:flex-row items-center space-y-0 md:space-y-0 md:space-x-8 self-center md:self-end py-1 md:py-0"
              >
                {/* Mobile view */}
                <p className="text-base md:hidden roboto text-black font-bold text-center">
                  "We combine Website creation with a passion for Digital
                  marketing. They go hand in hand like teenagers in love. It's
                  an inseparable relationship."
                </p>

                {/* Desktop view with spans */}
                <p className="hidden md:flex md:text-xl roboto text-black font-bold text-left flex-col">
                  <span className="">
                    "We combine Website creation with a passion for Digital
                    marketing.
                  </span>
                  <span className="text-black">
                    They go hand in hand like teenagers in love.It's an
                    inseparable relationship."
                  </span>
                  {/* <span></span> */}
                </p>
                <h1 className="text-3xl md:text-7xl lg:text-[9vw] font-bold textcolothree merichfont text-center md:text-left mb-4 md:mb-0">
                  ARE
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFour;

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Head from "next/head";

// const HeroFour: React.FC = () => {
//   const whoRef = useRef(null);
//   const weRef = useRef(null);
//   const areRef = useRef(null);
//   const pRef = useRef(null);

//   const whoInView = useInView(whoRef);
//   const weInView = useInView(weRef);
//   const areInView = useInView(areRef);
//   const pInView = useInView(pRef);

//   return (
//     <>
//       <Head>
//         <title>WEBDADDY | A Business Creation Digital Agency</title>
//         <meta name="description" content="A Business Creation Digital Agency" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" />
//       </Head>

//       <div className="w-full overflow-hidden">
//         <div className="relative w-screen min-h-[100vh] flex flex-col justify-center  py-2 md:py-2 px-4">
//           <div className="container mx-auto max-w-6xl px-4">
//             <div className="flex flex-col  md:space-y-12 lg:space-y-16 xl:space-y-24">
//               {/* First Section: WHO */}
//               <motion.div
//                 ref={whoRef}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{
//                   opacity: whoInView ? 1 : 0,
//                   x: whoInView ? 0 : -100,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.2, // First section appears with a slight initial delay
//                 }}
//                 className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-8"
//               >
//                 <h1 className="text-3xl md:text-7xl lg:text-[9vw] font-bold textcolothree merichfont text-center md:text-left">
//                   WHO
//                 </h1>
//                 <motion.p
//                   ref={pRef}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: pInView ? 1 : 0 }}
//                   transition={{
//                     duration: 1,
//                     delay: whoInView ? 0.6 : 0, // Paragraph appears after WHO section
//                   }}
//                   className="text-base md:text-xl roboto font-bold text-black text-center md:text-left"
//                 >
//                   "We're a crew of digital wizards - web devs, SEO geeks, social
//                   media mavens, and content creators -turning online ideas into
//                   epic digital experiences. With a blend of creativity, AI and
//                   tech magic, we make your brand shine!"
//                 </motion.p>
//               </motion.div>

//               {/* Second Section: WE */}
//               <motion.div
//                 ref={weRef}
//                 initial={{ opacity: 0, y: -100 }}
//                 animate={{
//                   opacity: weInView ? 1 : 0,
//                   y: weInView ? 0 : -100,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: whoInView ? 1 : 0,
//                 }}
//                 className="flex flex-col md:flex-row items-center justify-between relative w-full py-0 md:py-0"
//               >
//                 {/* Mobile: Centered Content - Adjusted spacing */}
//                 <div className="flex flex-col items-center w-full md:hidden mb-2 relative px-2">
//                   <h1 className="text-4xl sm:text-6xl font-bold stroke-text merichfont mb-2 text-center w-full">
//                     WE
//                   </h1>
//                   <p className="text-base text-center roboto font-bold text-black max-w-md px-4">
//                     "We believe branding, design, development, content and
//                     visuals should be aligned and combined with the latest
//                     technological advancements for business creation."
//                   </p>
//                 </div>

//                 {/* Desktop/Tablet Layout */}
//                 <div className="hidden md:flex w-full relative">
//                   {/* Ripple effect container - responsive adjustments */}
//                   <div
//                     className="absolute hidden lg:block
//                   left-[-10%] lg:left-[-10%] xl:left-[-10%] 2xl:left-[-20%]
//                   w-1/2 h-full
//                   -top-8 lg:-top-8 xl:-top-8
//                 "
//                   >
//                     <div
//                       className="APT-ripple-buttonsone transform
//                     scale-50
//                     lg:scale-75
//                     xl:scale-100
//                     2xl:scale-125
//                     origin-center"
//                     >
//                       <button></button>
//                       <button></button>
//                       <button></button>
//                       <button></button>
//                       <button></button>
//                     </div>
//                   </div>

//                   {/* WE Text - adjusted spacing */}
//                   <div
//                     className="flex items-center space-x-4 md:space-x-6 ml-auto z-10 relative
//                   pl-12 md:pl-24 lg:pl-32 xl:pl-0
//                   md:ml-0 lg:ml-[20%] xl:ml-[30%] 2xl:ml-[35%]
//                   w-full justify-end pr-8 md:pr-1 lg:pr-1"
//                   >
//                     <h1 className="text-6xl md:text-7xl lg:text-[9vw] font-bold stroke-text merichfont leading-tight">
//                       WE
//                     </h1>
//                     <p className="text-lg md:text-xl max-w-sm roboto text-black font-bold leading-relaxed">
//                       "We believe branding, design, development, content and
//                       visuals should be aligned and combined with the latest
//                       technological advancements for business creation."
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Third Section: ARE */}
//               <motion.div
//                 ref={areRef}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{
//                   opacity: areInView ? 1 : 0,
//                   x: areInView ? 0 : 100,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: weInView ? 1.2 : 0,
//                 }}
//                 className="flex flex-col-reverse md:flex-row items-center space-y-0 md:space-y-0 md:space-x-8 self-center md:self-end py-1 md:py-0"
//               >
//                 {/* Mobile view */}
//                 <p className="text-base md:hidden roboto text-black font-bold text-center">
//                   "We combine Website creation with a passion for Digital
//                   marketing. They go hand in hand like teenagers in love. It's
//                   an inseparable relationship."
//                 </p>

//                 {/* Desktop view with spans */}
//                 <p className="hidden md:flex md:text-xl roboto text-black font-bold text-left flex-col">
//                   <span className="">
//                     "We combine Website creation with a passion for Digital
//                     marketing.
//                   </span>
//                   <span className="text-black">
//                     They go hand in hand like teenagers in love.It's an
//                     inseparable relationship."
//                   </span>
//                   {/* <span></span> */}
//                 </p>
//                 <h1 className="text-3xl md:text-7xl lg:text-[9vw] font-bold textcolothree merichfont text-center md:text-left mb-4 md:mb-0">
//                   ARE
//                 </h1>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroFour;
