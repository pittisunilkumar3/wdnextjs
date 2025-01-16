import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const HeroThree: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [numberOfLines, setNumberOfLines] = useState(5);
  const [showClipPath, setShowClipPath] = useState(false);
  const [spreadFactor, setSpreadFactor] = useState(194);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Update number of lines
      if (width < 640) {
        setNumberOfLines(3);
      } else if (width < 1024) {
        setNumberOfLines(5);
      } else {
        setNumberOfLines(9);
      }

      // Update spread factor based on width and number of lines
      const newSpreadFactor =
        width > 1250
          ? numberOfLines > 9
            ? 120
            : 194
          : numberOfLines > 9
          ? 120
          : 160;
      setSpreadFactor(newSpreadFactor);

      // Update clip path visibility
      setShowClipPath(width > 1023);
      // setShowClipPath(width > 1250);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add("animate");
        } else {
          target.classList.remove("animate");
        }
      });
    }, options);

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }
  }, [sectionRef]);

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" /> */}
      </Head>

      <div
        className={`
        homepage-container
        bg-[#282828]
        text-[#e2dcc8]
        font-montserrat
        w-[200vw]
        ${showClipPath ? "clip-hero" : ""}
      `}
        ref={sectionRef}
      >
        <div className="Hero-section-three flex flex-row items-center justify-between w-full h-screen relative">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:flex Hero-section-three-desktop flex-row items-center justify-between w-full h-full">
            <div className="lines absolute inset-0 w-screen mx-auto">
              {Array.from({ length: numberOfLines }).map((_, index) => {
                const percentage =
                  (index / (numberOfLines - 1)) * spreadFactor -
                  spreadFactor / 2;
                return (
                  <div
                    key={index}
                    className="line absolute w-[1px] h-[200vh] -top-[50vh]"
                    style={{
                      left: "50%",
                      marginLeft: `${percentage}%`,
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "rotate(-35deg)",
                      transformOrigin: "center center",
                      animationDelay: `${index * 0.3}s`,
                    }}
                  />
                );
              })}
            </div>

            <div className="Hero-section-three-text-one flex-1 m-2">
              <h1 className="animate-on-scroll text-[5.5vw] ml-[30%] tracking-tighter leading-none pl-[10%] -mr-[15%] merichfont">
                IN DIGITAL <br /> MARKETING
              </h1>
              <h1 className="stroke animate-on-scroll text-[5.5vw] ml-[30%] tracking-tighter leading-none pl-[10%] -mr-[15%] merichfont">
                WE " TRUST "
              </h1>
              <p className="animate-on-scroll robototwo font-bold   text-[1.6vw] mt-[30px] leading-[1.5] text-start pl-[40%] tracking-tighter">
                Our human-led, AI-powered digital marketing creates <br />
                trust, builds value, and maximizes your <br /> ROI for your
                business.
              </p>
            </div>

            <div className="Hero-section-three-text-two flex-1 flex flex-col items-center text-center mt-[8%]">
              <p className="animate-on-scroll m-[1%] ml-[2%] text-[2vw] robototwo font-bold">
                We will put you in the driver's seat like a Formula One racer.
                <br />A digital marketing team assisting you to win with
                precision.
              </p>
              <Image
                src="/formulasCarimg.svg"
                alt="car-image"
                className="animate-on-scroll mt-[5px] max-w-[100%] h-auto mb-[10%]"
                width={800}
                height={400}
              />
            </div>

            <div className="Hero-section-three-text-three flex-1 mr-auto ml-5">
              <h1 className="animate-on-scroll text-[5.5vw] tracking-tighter leading-none merichfont">
                OFF TO THE
              </h1>
              <h1 className="stroke animate-on-scroll text-[5.5vw] tracking-tighter leading-none merichfont">
                RACES!
              </h1>
              <p className="animate-on-scroll text-[1.6vw] m-[1%] mr-0 leading-[1.5] robototwo font-bold">
                It's not enough to win races. Like race cars,
                <br /> you have to keep your website primed for action.
                <br /> Ready to take on any challenges that come your way!
              </p>
            </div>
          </div>

          {/* Mobile Layout - Visible only on mobile */}
          <div className="flex md:hidden Hero-section-three-mobile flex-col items-center justify-center w-full min-h-screen max-h-screen  px-4 py-8 space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="Hero-section-three-mobile-section-one text-center w-full">
              <h1 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-tight merichfont break-words">
                IN DIGITAL MARKETING
              </h1>
              <h1 className="stroke animate-on-scroll text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-tight merichfont break-words">
                WE " TRUST "
              </h1>
              <p className="animate-on-scroll roboto text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-relaxed text-center break-words px-2">
                Our human-led, AI-powered digital marketing creates trust,
                builds value, and maximizes your ROI for your business.
              </p>
            </div>

            <div className="Hero-section-three-mobile-section-two text-center w-full">
              <p className="animate-on-scroll text-sm sm:text-base md:text-lg roboto break-words px-2">
                We will put you in the driver's seat like a Formula One racer. A
                digital marketing team assisting you to win with precision.
              </p>
              <Image
                src="/formulasCarimg.svg"
                alt="car-image"
                className="animate-on-scroll mt-2 sm:mt-4 max-w-full h-auto mx-auto"
                width={300}
                height={150}
              />
            </div>

            <div className="Hero-section-three-mobile-section-three text-center w-full">
              <h1 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-tight merichfont break-words">
                OFF TO THE
              </h1>
              <h1 className="stroke animate-on-scroll text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-tight merichfont break-words">
                RACES!
              </h1>
              <p className="animate-on-scroll text-sm sm:text-base md:text-lg m-1 leading-relaxed roboto break-words px-2">
                It's not enough to win races. Like race cars, you have to keep
                your website primed for action. Ready to take on any challenges
                that come your way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroThree;
