import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";

export default function HeroTwo() {
  const [numberOfLines, setNumberOfLines] = useState(5);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });

  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumberOfLines(5);
      } else if (width < 1024) {
        setNumberOfLines(8);
      } else if (width < 1536) {
        setNumberOfLines(8);
      } else {
        setNumberOfLines(8);
      }
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  useEffect(() => {
    const videoPreload = document.createElement("link");
    videoPreload.rel = "preload";
    videoPreload.href = "/animate-comp.mp4";
    videoPreload.as = "fetch";
    videoPreload.type = "video/mp4";
    document.head.appendChild(videoPreload);

    return () => {
      document.head.removeChild(videoPreload);
    };
  }, []);

  useEffect(() => {
    // Preload critical images
    const imagesToPreload = [
      "/harisirimage-new.svg",
      "/coo-image-enlarge.svg",
      // Add other critical images here
    ];

    imagesToPreload.forEach((imagePath) => {
      const imagePreload = document.createElement("link");
      imagePreload.rel = "preload";
      imagePreload.href = imagePath;
      imagePreload.as = "image";
      document.head.appendChild(imagePreload);
    });

    return () => {
      // Cleanup preloaded links
      document
        .querySelectorAll('link[rel="preload"][as="image"]')
        .forEach((link) => {
          document.head.removeChild(link);
        });
    };
  }, []);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const designTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        bounce: 0.4,
        delay: 0.9,
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

      <div className="relative min-h-screen w-full pt-0">
        <section
          ref={sectionRef}
          className="min-h-screen w-full bg-[#2c2b2b] text-white flex flex-col md:flex-row items-center justify-center overflow-hidden  px-6 md:px-12 lg:px-20 pt-0 relative clip-herohomeo"
        >
          {/* Animated Lines */}
          <div className="lines absolute  inset-0 w-screen mx-auto">
            {Array.from({ length: numberOfLines }).map((_, index) => {
              const spreadFactor = numberOfLines > 10 ? 110 : 150;
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
                    transform: "rotate(-35deg)",
                  }}
                />
              );
            })}
          </div>

          <div className="max-w-8xl w-full mx-auto px-4 flex flex-col lg:flex-row justify-center items-center lg:items-center text-center lg:text-left">
            {/* Left Content */}
            <div className="max-w-xl w-full text-center md:text-left p-6">
              <motion.h1
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.1,
                  margin: "100px 0px 0px 0px",
                }}
                className="text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl merichfont mb-4 text-beige"
              >
                LET'S BEND
              </motion.h1>

              <motion.h1
                variants={designTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.1,
                  margin: "100px 0px 0px 0px",
                }}
                className="text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl outline-text merichfont mb-2"
              >
                DESIGN
              </motion.h1>

              <motion.div
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.1,
                  margin: "100px 0px 0px 0px",
                }}
              >
                <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed roboto font-bold mb-6 text-beige">
                  Your digital footprint starts with creating a rock-solid
                  website. First impressions do last - So Let's Make It Last!
                  Don't let anyone define you. It's time to create your own
                  signature.
                </p>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed roboto font-bold text-beige">
                  An experience where your business goals, branding & marketing
                  efforts align like bent wood. A narrative carefully crafted
                  for a natural experience. A website with your local & global
                  reach is born.
                </p>
              </motion.div>
            </div>

            {/* Right Video */}
            <motion.div
              variants={videoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.1,
                margin: "100px 0px 0px 0px",
              }}
              className="flex justify-center items-center w-[250px] xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[500px] mt-8 md:mt-0 mx-auto"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full max-w-full h-auto object-contain rounded-lg"
                src="/animate-comp.mp4"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
