import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [videoSrc, setVideoSrc] = useState("");
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation controls and other logic remains the same
  const controlsH1 = useAnimation();
  const controlsP = useAnimation();
  const controlsH2 = useAnimation();
  const controlsImages1 = useAnimation();
  const controlsImages2 = useAnimation();

  const pageKey = useMemo(() => Date.now().toString(), [router.asPath]);

  useEffect(() => {
    setVideoSrc("/wavescom_2.mp4");

    if (videoRef.current) {
      videoRef.current.load();
    }

    const resetAnimations = async () => {
      await Promise.all([
        controlsH1.set("hidden"),
        controlsP.set("hidden"),
        controlsH2.set("hidden"),
        controlsImages1.set("hidden"),
        controlsImages2.set("hidden"),
      ]);

      await Promise.all([
        controlsH1.start("visible"),
        controlsP.start("visible"),
        controlsH2.start("visible"),
        controlsImages1.start("visible"),
        controlsImages2.start("visible"),
      ]);
    };

    resetAnimations();
  }, [
    pageKey,
    controlsH1,
    controlsP,
    controlsH2,
    controlsImages1,
    controlsImages2,
  ]);

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video error:", e);
    setVideoError(true);
  };

  const handleVideoLoadedMetadata = () => {
    console.log("Video metadata loaded successfully");
  };

  // Animation variants remain the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  const h1SpanVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    }),
  };

  const rightSideVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    }),
  };

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" />
      </Head>

      <div
        className="relative min-h-screen w-full overflow-hidden bg-[#2c2b2b]"
        id="#home"
      >
        <motion.div
          key={pageKey}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative w-full h-full min-h-screen flex items-start lg:items-center p-0"
        >
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={handleVideoError}
            onLoadedMetadata={handleVideoLoadedMetadata}
          />

          {videoError && (
            <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center z-10">
              Video Failed to Load. Please check the video file.
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full h-full gradient-overlay opacity-80 z-10"></div>

          {/* Modified container with 2xl breakpoint for screens larger than 1320px */}
          <div className="relative w-full mx-auto px-4 lg:px-8 lg:max-w-7xl 2xl:max-w-full 2xl:px-24 flex flex-col lg:flex-row justify-start items-center lg:items-start text-center space-x-0 lg:space-x-8 2xl:space-x-12 pt-16 md:pt-10 lg:pt-0 mt-0 lg:mt-0 lg:ml-12 2xl:ml-24">
            <div className="text-center mb-8 lg:mb-0 lg:mr-2 w-full lg:w-1/2 lg:text-left lg:pr-4 2xl:pr-8">
              <motion.h1
                animate={controlsH1}
                initial="hidden"
                className="text-4xl md:text-3xl lg:text-8xl leading-tight merichfont blend text-center lg:text-left flex flex-wrap justify-center lg:justify-start"
              >
                <motion.span
                  variants={h1SpanVariants}
                  custom={0}
                  className="whitespace-nowrap mr-2"
                >
                  A BUSINESS
                </motion.span>
                <motion.span
                  variants={h1SpanVariants}
                  custom={1}
                  className="outline-text blend merichfont mr-2"
                >
                  CREATION
                </motion.span>
                <motion.span
                  variants={h1SpanVariants}
                  custom={2}
                  className="blend merichfont"
                >
                  AGENCY
                </motion.span>
              </motion.h1>

              <motion.p
                animate={controlsP}
                initial="hidden"
                variants={leftVariants}
                className="text-base md:text-lg mt-4 md:mt-6 roboto font-bold blend max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                An AI focused team on a mission for your{" "}
                <br className="hidden md:block" />
                Web development & Digital Marketing needs.
              </motion.p>
            </div>

            <div className="text-center flex flex-col items-center justify-center text-beige w-full lg:w-1/2 lg:text-right lg:pl-0 lg:pr-8 2xl:pr-16">
              <motion.h2
                animate={controlsH2}
                initial="hidden"
                variants={rightSideVariants}
                custom={0}
                className="text-3xl md:text-4xl lg:text-5xl font-bold merichfont blend"
              >
                WEBDADDY
              </motion.h2>

              <motion.div
                animate={controlsImages1}
                initial="hidden"
                variants={rightSideVariants}
                custom={1}
                className="relative mb-4 w-full max-w-md mx-auto flex justify-center items-center z-10"
              >
                <Image
                  src="/wstring.png"
                  alt="WebDaddy Logo 1"
                  width={80}
                  height={80}
                  className="object-contain max-w-full h-auto w-[50px] sm:w-[80px]"
                  priority
                />
                <Image
                  src="/dstring.png"
                  alt="WebDaddy Logo 2"
                  width={60}
                  height={60}
                  className="object-contain max-w-full h-auto w-[40px] sm:w-[60px] mt-6"
                  priority
                />
              </motion.div>

              <motion.p
                animate={controlsP}
                initial="hidden"
                variants={rightSideVariants}
                custom={3}
                className="text-sm md:text-base text-muted-foreground w-full lg:w-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[250px] xl:max-w-[360px] mx-auto text-center roboto font-bold blend22"
              >
                Like waves carve and etch their story on the shore, we sculpt
                your enduring digital identity.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div
          className="absolute top-0 right-0 h-full w-64 bg-transparent hidden lg:block"
          style={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0 100%)",
            backgroundColor: "#2c2b2b",
            zIndex: 10,
            position: "absolute",
          }}
        />
      </div>
    </>
  );
}
