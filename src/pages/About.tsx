import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  const headingVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
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

      <div
        className="flex items-center justify-center w-screen h-screen bg-[#333] text-[#e3ddc8] relative z-10 overflow-hidden"
        id="#about"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Vertical Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5 }}
            className="vertical-text-container hidden lg:flex absolute left-0 items-center h-full merichfont"
          >
            <div className="vertical-text text-[10vw] xl:text-[10rem] bg-abusinees transform -rotate-90 whitespace-nowrap merichfont">
              About
            </div>
          </motion.div>

          <div className="flex flex-col justify-center items-center h-full lg:items-start lg:pl-[15vw] max-w-[90vw] mx-auto text-center lg:text-left">
            {/* Mobile Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
              className="lg:hidden text-4xl sm:text-5xl md:text-6xl mb-4 bg-abusinees merichfont"
            >
              About Us
            </motion.div>

            <div className="flex flex-col justify-center lg:grid lg:grid-cols-3 gap-4 lg:gap-8 w-full justify-center items-center">
              {/* About Us Section */}
              <div className="flex flex-col items-center lg:items-center lg:pl-12">
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={paragraphVariants}
                  className="ptagfont text-sm sm:text-base md:text-lg mb-4 text-center lg:text-left roboto font-bold"
                >
                  We dream, think, design, engineer, learn, and build like
                  artists. And we are hellbent on creating the best digital
                  experiences in the world for our clients.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        delay: 0.6,
                      },
                    },
                  }}
                  className="hidden lg:block text-[10vw] xl:text-[9rem] text-stroke leading-none text-center w-full merichfont"
                  style={{
                    WebkitTextStroke: "1px #e2dcc8",
                    color: "transparent",
                  }}
                >
                  us
                </motion.p>
              </div>

              {/* Vision Section */}
              <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
                <div>
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-2 merichfont"
                  >
                    Vision
                  </motion.h3>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={paragraphVariants}
                    className="ptagfont text-xs sm:text-sm md:text-base text-center lg:text-left roboto font-bold"
                  >
                    Our vision is to ride on emergent technologies and be a
                    leader & innovator in creating user experiences.
                  </motion.p>
                </div>

                <div>
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-2 merichfont"
                  >
                    Mission
                  </motion.h3>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={paragraphVariants}
                    className="ptagfont text-xs sm:text-sm md:text-base text-center lg:text-left roboto font-bold"
                  >
                    Our mission is to solve your user experience. Reimagining
                    elegant and thoughtful digital solutions on how people
                    interact with brands.
                  </motion.p>
                </div>
              </div>

              {/* Our Focus Section */}
              <div className="flex flex-col items-center lg:items-start">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={headingVariants}
                  className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-2 merichfont"
                >
                  Our Focus
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={paragraphVariants}
                  className="ptagfont text-xs sm:text-sm md:text-base w-3/4 lg:w-2/3 text-center lg:text-left roboto font-bold"
                >
                  We want to humanize the digital process. Infectious creativity
                  to create natural platforms for seamless communication and
                  experience.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
