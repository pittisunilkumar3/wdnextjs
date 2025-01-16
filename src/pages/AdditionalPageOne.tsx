import { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

// Custom component for animating text word by word
const AnimatedText = ({
  children,
  className,
  baseDelay = 0,
  staggerDelay = 0.2,
}: {
  children: string;
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
}) => {
  const words = children.split(" ");
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: baseDelay + custom * staggerDelay,
      },
    }),
  };
  
  return (
    <div className={`${className} flex flex-wrap justify-center items-center`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={wordVariants}
          custom={index}
          className="inline-block mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
const AdditionalPageOne: FC = () => {
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
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
    return () => clearTimeout(timer);
  }, []);

  const headingVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
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
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.1,
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
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={headingVariants}
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <AnimatedText
              className="text-4xl md:text-5xl merichfont textcolor"
              baseDelay={0.2}
            >
              The team is the compass, and our team work charts the course to
              your success!
            </AnimatedText>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdditionalPageOne;
