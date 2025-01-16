import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Head from "next/head";
import Image from "next/image";

const team = [
  {
    name: "Hari",
    role: "CEO",
    image: "/harisirimage-new.svg",
  },
  {
    name: "Dhanur",
    role: "COO",
    image: "/coo-image-enlarge.svg",
  },
  {
    name: "Rohith",
    role: "CTO",
    image: "/rohith-image-updated-a.svg",
  },
  {
    name: "Rani",
    role: "Corp Comms",
    image: "/mam-image.svg",
  },
  {
    name: "Girish",
    role: "Head - Frontend Developer",
    image: "/girish-en_img-cropped (1).svg",
  },
  {
    name: "Ali",
    role: "Head - Digital Marketing",
    image: "/ali-image-Mediamodifier-Design-cropped.svg",
  },
  {
    name: "Hamsi",
    role: "Mascot",
    image: "/hamsi.png",
  },
];

export default function Team() {
  const ourHeadingVariants = {
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

  const teamHeadingVariants = {
    hidden: {
      opacity: 0,
      x: 100,
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

  const subheadingVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.6,
      },
    },
  };

  const tableVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.8,
      },
    },
  };

  const createMemberVariants = (baseDelay: number) => ({
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 8,
        delay: baseDelay + custom * 0.1,
      },
    }),
  });

  const memberImageVariants = createMemberVariants(0.3);
  const memberNameVariants = createMemberVariants(0.4);
  const memberRoleVariants = createMemberVariants(0.5);

  const getResponsiveDelay = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 0.2 + index * 0.1;
    }
    return 0.5 + index * 0.2;
  };

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" /> */}
      </Head>
      <section className="min-h-screen w-full text-white bg-[#282828] py-16 sm:py-20 md:py-24 lg:py-32 flex items-center">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 w-full">
          <div className="flex justify-center items-center space-x-4 mb-4 lg:mb-6">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={ourHeadingVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  merichfont textcolor"
            >
              OUR
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={teamHeadingVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  outline-text merichfont"
            >
              TEAM
            </motion.span>
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={subheadingVariants}
            className="text-center text-sm sm:text-base md:text-lg mb-8 sm:mb-12 lg:mb-16 px-2 roboto font-bold textcolor"
          >
            You will find some of the brightest minds on the web in our team.
            Your success defines the core of our processes. Every collaboration
            pins it down and is mission-oriented and driven.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={tableVariants}
            className="w-full border-separate border border-[#e2dcc8] table md:table-fixed"
          >
            <div className="table-row max-md:hidden">
              {team.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="table-cell align-top border border-[#e2dcc8] p-2 sm:p-4"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={memberImageVariants}
                    custom={index}
                    className="flex items-center"
                  >
                    <div className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={0}
                        height={0}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="ml-2">
                      <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={memberNameVariants}
                        custom={index}
                        className="text-sm sm:text-base md:text-xl  mb-1 merichfont textcolor"
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={memberRoleVariants}
                        custom={index}
                        className="text-xs sm:text-sm textcolor roboto font-bold"
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* Empty cell at the end of the first row */}
              <div className="table-cell hidden md:table-cell"></div>
            </div>
            <div className="table-row max-md:hidden">
              {team.slice(3).map((member, index) => (
                <div
                  key={index}
                  className="table-cell align-top border border-[#e2dcc8] p-2 sm:p-4"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={memberImageVariants}
                    custom={index + 3}
                    className="flex items-center"
                  >
                    <div className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={0}
                        height={0}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="ml-2">
                      <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={memberNameVariants}
                        custom={index + 3}
                        className="text-sm sm:text-base md:text-xl  mb-1 merichfont textcolor"
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={memberRoleVariants}
                        custom={index + 3}
                        className="text-xs sm:text-sm textcolor roboto font-bold"
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="block border border-[#e2dcc8] p-4 text-center"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 70,
                          damping: 8,
                          delay: getResponsiveDelay(index),
                        },
                      },
                    }}
                    className="w-full flex items-center justify-center mb-4"
                  >
                    <div className="w-40 h-40 flex items-center justify-center overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={0}
                        height={0}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                  <div>
                    <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.1 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 70,
                            damping: 8,
                            delay: getResponsiveDelay(index) + 0.1,
                          },
                        },
                      }}
                      className="text-2xl  mb-2 textcolor"
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.1 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 70,
                            damping: 8,
                            delay: getResponsiveDelay(index) + 0.2,
                          },
                        },
                      }}
                      className="text-lg textcolor"
                    >
                      {member.role}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
