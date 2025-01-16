import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Head from "next/head";

type ServiceContent = {
  description: string | string[];
  keyPoints: string[];
  technologies: string[];
  keyPointDetails?: { [key: string]: string[] };
};

type ServiceContentsType = {
  [key in
    | "AI Services"
    | "Website Design"
    | "Digital Marketing"
    | "Reputation Management"
    | "Mobile App"]: ServiceContent;
};

const ServiceContent: React.FC<{
  activeService: string;
  serviceContents: ServiceContentsType;
}> = ({ activeService, serviceContents }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const ref = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const descriptionInView = useInView(descriptionRef, {
    once: false,
    amount: 0.5,
  });

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const activeServiceContent =
    serviceContents[activeService as keyof ServiceContentsType];

  const headingVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const accordionVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full p-4 md:p-10 textcolor flex flex-col items-center">
      {/* Service Heading */}
      <motion.h2
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-3xl md:text-4xl lg:text-5xl  mb-4 text-center w-full textcolor merichfont"
      >
        {activeService}
      </motion.h2>

      {/* Service Description */}
      <motion.div
        ref={descriptionRef}
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
        variants={descriptionVariants}
        className="text-base md:text-lg text-gray-300 text-center mb-8 max-w-3xl textcolor roboto font-bold space-y-4"
      >
        {Array.isArray(activeServiceContent.description) ? (
          <ul className="list-disc list-inside space-y-3">
            {activeServiceContent.description.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="text-left"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        ) : (
          activeServiceContent.description
        )}
      </motion.div>

      {/* Accordions */}
      <div className="space-y-4 w-full max-w-5xl mx-auto px-4 md:px-0 lg:max-w-5xl xl:max-w-6xl">
        <AnimatePresence>
          {activeServiceContent.keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-b textcolor last:border-b-0 pb-4 last:pb-0"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-3 sm:p-4 transition-colors duration-300 ease-in-out"
              >
                {/* Serial Number */}
                <span
                  className={`w-10 sm:w-12 text-left  textcolor merichfont text-2xl sm:text-3xl md:text-5xl mr-2 sm:mr-4 transition-all duration-300 ${
                    openAccordion === index ? "" : "outline-text"
                  }`}
                >
                  {index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`}
                </span>

                {/* Accordion Title */}
                <span className="flex-grow text-center text-sm sm:text-base md:text-lg textcolor roboto font-bold transition-colors duration-300">
                  {point}
                </span>

                {/* Chevron Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                    openAccordion === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: openAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={accordionVariants}
                    className="p-4 textcolor text-sm md:text-base rounded-b-lg overflow-hidden"
                  >
                    {activeServiceContent.keyPointDetails &&
                    activeServiceContent.keyPointDetails[point] ? (
                      <motion.ul
                        variants={accordionVariants}
                        className="space-y-3"
                      >
                        {activeServiceContent.keyPointDetails[point].map(
                          (detail, detailIndex) => (
                            <motion.li
                              key={detail}
                              variants={itemVariants}
                              className="flex items-start space-x-3 group"
                            >
                              <motion.svg
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5 roboto font-bold textcolor flex-shrink-0 mt-1 group-hover:textcolor transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </motion.svg>
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="flex-grow textcolor roboto font-bold group-hover:textcolor transition-colors duration-300"
                              >
                                {detail}
                              </motion.span>
                            </motion.li>
                          )
                        )}
                      </motion.ul>
                    ) : (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="italic text-gray-500"
                      >
                        No additional details available.
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Services() {
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

  const servicesHeadingVariants = {
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

  const [activeService, setActiveService] = useState<
    | "AI Services"
    | "Website Design"
    | "Digital Marketing"
    | "Reputation Management"
    | "Mobile App"
  >("AI Services");

  const serviceContents: ServiceContentsType = {
    "AI Services": {
      description:
        "Leveraging cutting-edge artificial intelligence to transform your business through intelligent solutions and automation.",
      keyPoints: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "AI Consulting",
        "Custom AI Solutions",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Google AI",
        "Azure AI",
      ],
      keyPointDetails: {
        "Machine Learning Models": [
          "Develop advanced predictive and prescriptive models",
          "Implement deep learning algorithms for complex pattern recognition",
          "Create custom machine learning solutions tailored to your business needs",
        ],
        "Natural Language Processing": [
          "Build intelligent chatbots and conversational interfaces",
          "Perform sentiment analysis and text classification",
          "Develop language translation and understanding systems",
        ],
        "Predictive Analytics": [
          "Forecast business trends and customer behaviors",
          "Optimize decision-making with data-driven insights",
          "Implement advanced statistical modeling techniques",
        ],
        "AI Consulting": [
          "Strategic AI implementation roadmap",
          "Technology stack recommendations",
          "AI ethics and responsible AI guidance",
        ],
        "Custom AI Solutions": [
          "End-to-end AI product development",
          "Integration with existing business systems",
          "Continuous model training and improvement",
        ],
      },
    },
    "Website Design": {
      description:
        "The time when designers were sidelined in website development discussions is history. Today creative websites start with design and is the backbone of your online experience marketing.",
      keyPoints: [
        "Art Direction",
        "Experience focused",
        "UI & UX Design",
        "Branding & Branding strategy",
        "Corporate Website Development",
        "Interactive design",
        "Ecommerce/Shopify",
        "WEB 3.0 / NFT Website ",
        "Motion graphics and video",
        "Backend & CMS Development ",
        "Frontend development",
        "ERP integration",
        "CRM development",
        "Block Chain / Smart Contracts",
      ],
      technologies: ["Figma", "Adobe XD", "Webflow", "Tailwind CSS", "Next.js"],
      keyPointDetails: {
        "Art Direction": [
          "We blend visual storytelling with strategic design to align with your brand’s voice and balance creativity with functionality.",
        ],
        "Experience focused": [
          "We create cohesive, striking websites where every element - from layout to color - enhances user experience and drives meaningful engagement.",
        ],
        "UI & UX Design": [
          "Our focus on UI/UX design centres around creating intuitive and engaging digital experiences. We sculpt and fine-tune every interface detail to ensure seamless navigation and a superior user experience.",
        ],
        "Branding & Branding strategy": [
          "Branding and branding strategy for us involve crafting a unique identity that resonates with your target audience. ",
          "We develop a comprehensive strategy that defines your brand’s voice, visual style, and messaging, ensuring consistency across all touchpoints and building a strong, memorable presence online.",
        ],
        "Corporate Website Development": [
          "We create strong, scalable, and steady websites tailored for agencies.",
          "Our solutions reflect your corporate identity and integrate seamlessly with existing systems.",
          "Focused on driving growth, credibility, and a professional online presence.",
        ],
        // "": [],
        "Interactive design": [
          "We craft interactive elements that engage users and enhance their experience.",
          "Designs are visually attractive and practical, making sure meaningful consumer interactions.",
          "Dynamic animations and intuitive navigation turn passive visitors into active participants.",
        ],
        "Ecommerce/Shopify": [
          "We develop custom, conversion-focused ecommerce platforms for maximum sales potential.",
          "Our solutions offer seamless shopping experiences, from product showcases to secure checkout.",
          "Mobile-optimized and user-friendly designs drive online sales.",
        ],
        "WEB 3.0 / NFT Website": [
          "We create decentralized, blockchain-based platforms for Web 3.0 and NFT websites.",
          "Expertise in cutting-edge technologies ensures security, transparency, and ownership.",
          "Innovative solutions cater to the next generation of the internet.",
        ],
        "Motion graphics and video": [
          "We produce compelling video content and animations to tell your brand’s story.",
          "Motion photographs talk complex ideas and beautify consumer revel in.",
          "Our videos leave a lasting impression on your audience.",
        ],
        "Backend & CMS Development": [
          "We build scalable, secure, and flexible backend systems for your website.",
          "Custom CMS solutions empower easy and efficient content management.",
          "Focused on seamless functionality and high performance.",
        ],
        "Frontend development": [
          "We translate your design into a responsive, high-performance website.",
          "Using the latest technologies, we build visually appealing and intuitive interfaces.",
          "Ensures flawless performance across all devices with smooth animations.",
        ],
        "ERP integration": [
          "We integrate your website with ERP systems for streamlined operations and data flow.",
          "Real-time data exchange and automation enhance efficiency and reduce costs.",
          "Specialized in integrating a wide range of ERP systems for informed decision-making.",
        ],
        "CRM development": [
          "We develop customized CRM systems to manage and analyze customer interactions.",
          "Solutions are tailored to drive customer satisfaction, retention, and growth.",
          "Whether simple or complex, our CRM systems enhance customer relationships.",
        ],
        "Block Chain / Smart Contracts": [
          "We develop secure, transparent, and decentralized applications using blockchain technology.",
          "Smart contracts for automated transactions ensure trust and efficiency.",
          "Our innovative solutions position your business for the digital future.",
        ],
      },
    },
    "Digital Marketing": {
      description: [
        "A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun, and learning experience for the visitors through all the sensory medium.",
        "You can change human behavior by invoking emotional responses by creating an environment with design & content. it's an art.",
      ],
      keyPoints: [
        "SEO – Search Engine Optimization",
        "GMB/GBP – Google Business Profile",
        "SEM – Search Engine Marketing",
        "SMM – Social Media Marketing",
        "Content Marketing",
        "Video Creation/Editing /Marketing",
        "Influencer Marketing",
        "NFT 360",
      ],
      technologies: [
        "Google Ads",
        "Social Media Platforms",
        "SEO Tools",
        "Analytics",
      ],
      keyPointDetails: {
        "SEO – Search Engine Optimization": [
          "We optimize your site to rank higher on look motors, driving natural traffic.",
          "Centered on catchphrase inquire about, on-page and off-page SEO to move forward visibility.",
          "We guarantee long-term, maintainable development through moral SEO practices.",
        ],
        "GMB/GBP – Google Business Profile": [
          "We optimize your Google Trade Profile for nearby look visibility.",
          "Utilize organic strategies and paid ads to enhance your online presence.",
          "Ensure your trade stands out in neighborhood look comes about and draws in more customers.",
        ],
        "SEM – Search Engine Marketing": [
          "We create targeted Google Ads campaigns to reach your audience effectively.",
          "Focused on maximizing ROI through strategic bidding and ad placements.",
          "Continuous observing and optimization guarantee your advertisements perform at their best.",
        ],
        "SMM – Social Media Marketing": [
          "We develop and manage social media campaigns that resonate with your audience.",
          "Use a blend of natural substance and paid advertisements to increment engagement and brand awareness.",
          "Tailored strategies for each platform ensure maximum reach and impact.",
        ],
        "Content Marketing": [
          "We create high-quality substance that advises, locks in, and changes over your audience.",
          "Content is tailored to your brand's voice and optimized for search engines.",
          "From blogs to website copy, we create content that drives traffic and builds authority.",
        ],
        "Video Creation/Editing /Marketing": [
          "We produce compelling videos that capture attention and drive engagement.",
          "Tailored for platforms like Google and social media to enhance visibility.",
          "From concept to altering, our recordings communicate your message powerfully.",
        ],
        "Influencer Marketing": [
          "We connect your brand with influencers to amplify your social media presence.",
          "Focused on authentic collaborations that drive engagement and build trust.",
          "We select influencers that align with your brand and target audience.",
        ],
        "NFT 360": [
          "We handle end-to-end NFT launches, from creation to marketing.",
          "Use strategic marketing to build hype and drive sales for your NFT projects.",
          "Our approach ensures your NFT stands out in the competitive digital space.",
        ],
      },
    },
    "Reputation Management": {
      description: [
        "Your reputation online, attributes to how successful your business will be in the marketplace. The 24/7 digital environment today determines, how customers buy your products or services. ",
        "94% of the consumers today conduct research online on search engines and social media sites before making a purchase. Therefore, the consensus of the public perception of your company online is of at most importance. ",
        "Online reputation consists of your positive image on your website, social media sites, positive reviews on google and other review sites and positive news coverage. Trust building online require commitment and a long-term vision. The wise invests on their reputation building and reap the benefits.",
      ],
      keyPoints: [
        "Content Removal",
        "Review Management",
        "Google Reviews",
        "FB reviews",
        "Reputation Monitoring",
        "Branding",
      ],
      technologies: [
        "Online Reputation Management Tools",
        "Social Media Analytics",
        "Review Platforms",
      ],
      keyPointDetails: {
        "Content Removal": [
          "We specialize in removing unwanted or harmful content from the web.",
          "Our team works to protect your brand by eliminating negative or defamatory content.",
          "We use ethical methods to ensure the swift and effective removal of damaging material.",
        ],
        "Review Management": [
          "We offer assistance you oversee and react to online audits to keep up a positive notoriety.",
          "Our strategies focus on encouraging positive feedback and addressing negative reviews constructively.",
          "We ensure your online presence reflects your brand's values and commitment to customer satisfaction.",
        ],
        "Google Reviews": [
          "We enhance your Google presence by managing and improving your Google reviews.",
          "Strategies include soliciting positive reviews and addressing any negative feedback.",
          "Our approach builds trust and credibility with potential customers searching for your business.",
        ],
        "FB reviews": [
          "We manage your Facebook reviews to ensure your social media reputation is strong.",
          "Focused on engaging with customers and addressing feedback to foster a positive community.",
          "Our strategies boost your brand's image on one of the most influential social platforms.",
        ],
        "Reputation Monitoring": [
          "We continuously monitor your online presence across various platforms to protect your reputation.",
          "Early detection of negative content allows for swift response and mitigation.",
          "We provide regular reports and insights to keep you informed of your online image.",
        ],
        Branding: [
          "We work on building and maintaining a positive brand image across all digital channels.",
          "Our branding efforts are aligned with your company's values and goals.",
          "We create a consistent and trustworthy online presence that resonates with your audience.",
        ],
      },
    },
    "Mobile App": {
      description:
        "Mobile app development creates user-friendly, feature-rich applications for smartphones and tablets, enhancing customer engagement and providing seamless mobile experiences.",

      keyPoints: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform App Development",
        "UI/UX Design",
        "App Testing & QA",
        "App Store Optimization (ASO)",
        "Maintenance & Support",
        "In-App Purchases & Monetization",
        "App Analytics",
      ],
      technologies: [
        "React Native",
        "Swift",
        "Kotlin",
        "Android Studio",
        "Xcode",
      ],
      keyPointDetails: {
        "iOS App Development": [
          "We develop high-quality iOS apps tailored to your business needs.",
          "Focused on user experience, we create intuitive and engaging apps for iPhone and iPad.",
          "Our apps are optimized for performance, ensuring smooth and responsive user interactions.",
        ],
        "Android App Development": [
          "We build custom Android apps that run seamlessly across all devices.",
          "From design to deployment, our team ensures your app is optimized for the Android ecosystem.",
          "We focus on creating user-friendly interfaces and robust functionality.",
        ],
        "Cross-Platform App Development": [
          "We develop cross-platform apps that work flawlessly on both iOS and Android.",
          "Utilizing frameworks like React Native, we ensure consistent user experience across platforms.",
          "Our approach reduces development time and costs while maintaining high quality.",
        ],
        "UI/UX Design": [
          "We design visually appealing and user-centric interfaces for your mobile apps.",
          "Our focus on UI/UX ensures your app is easy to navigate and engaging to use.",
          "We create designs that enhance user satisfaction and retention.",
        ],
        "App Testing & QA": [
          "We conduct thorough testing to ensure your app is bug-free and performs well.",
          "Our QA team tests across multiple devices and operating systems for consistency.",
          "We identify and resolve issues early, ensuring a smooth launch.",
        ],
        "App Store Optimization (ASO)": [
          "We optimize your app's presence on the App Store and Google Play to increase visibility.",
          "Focused on keywords, descriptions, and visuals to improve app rankings.",
          "Our ASO procedures drive downloads and progress client acquisition.",
        ],
        "Maintenance & Support": [
          "We offer continuous upkeep and back to keep your app up-to-date and running smoothly.",
          "Normal upgrades guarantee compatibility with modern OS forms and devices.",
          "Our support team is available to address any issues and provide enhancements as needed.",
        ],
        "In-App Purchases & Monetization": [
          "We integrate in-app purchases and other monetization strategies to generate revenue.",
          "Our focus is on providing value to users while driving profitability for your business.",
          "We help you choose the right monetization model that aligns with your app's goals.",
        ],
        "App Analytics": [
          "We execute comprehensive analytics to track client behavior and app execution.",
          "Data-driven insights help you understand how users interact with your app.",
          "We provide actionable recommendations to improve user engagement and retention.",
        ],
      },
    },
  };

  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToService = (serviceName: string) => {
    if (
      serviceName === "AI Services" ||
      serviceName === "Website Design" ||
      serviceName === "Digital Marketing" ||
      serviceName === "Reputation Management" ||
      serviceName === "Mobile App"
    ) {
      setActiveService(serviceName);
      const serviceElement = serviceRefs.current[serviceName];
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const setServiceRef = useCallback((serviceName: string) => {
    return (el: HTMLDivElement | null) => {
      if (!el) return; // Return early if el is null

      serviceRefs.current[serviceName] = el;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (
                serviceName === "AI Services" ||
                serviceName === "Website Design" ||
                serviceName === "Digital Marketing" ||
                serviceName === "Reputation Management" ||
                serviceName === "Mobile App"
              ) {
                setActiveService(serviceName);
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "-100px 0px 0px 0px",
        }
      );

      observer.observe(el);

      // Store the observer in a WeakMap or as a property on the element
      const observers = (el as any).__observers || [];
      observers.push(observer);
      (el as any).__observers = observers;
    };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(serviceRefs.current).forEach((ref) => {
        if (ref) {
          const observers = (ref as any).__observers;
          if (observers) {
            observers.forEach((observer: IntersectionObserver) =>
              observer.disconnect()
            );
          }
        }
      });
    };
  }, []);

  const sidebarItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: custom * 0.1,
      },
    }),
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
        className="bg-[#282828] w-full min-h-screen flex flex-col py-12 md:py-16"
        id="#services"
      >
        <div className="flex justify-center items-center space-x-4 mb-16 w-full text-center">
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
            variants={servicesHeadingVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  outline-text merichfont"
          >
            SERVICES
          </motion.span>
        </div>

        {/* Mobile Version - Shown below 1130px */}
        <div className="lg:hidden">
          <div className="bg-[#282828] p-4 md:p-6">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={servicesHeadingVariants}
              className="text-xl md:text-2xl  mb-6 md:mb-8 merichfont textcolor"
            >
              Service Categories
            </motion.h2>
            <div className="space-y-3 md:space-y-5">
              {Object.keys(serviceContents).map((service, index) => (
                <motion.div
                  key={service}
                  initial="hidden"
                  animate="visible"
                  variants={sidebarItemVariants}
                  custom={index}
                  onClick={() => scrollToService(service)}
                  className="hover:bg-[#2c2b2b] p-2 rounded cursor-pointer textcolor w-full border-b border-[#e2dcc8] pb-3"
                >
                  <div className="flex justify-between w-full items-center">
                    <span
                      className={`w-10 sm:w-12 border-2  textcolor merichfont rounded-full flex items-center justify-center text-1xl sm:text-3xl md:text-5xl mr-2 sm:mr-4 transition-all duration-300 ${
                        activeService === service
                          ? "bg-[#26d3b4] border-[#26d3b4] border-2 textcolotwo  roboto font-bold"
                          : "textcolor border-2 border-[#e2dcc8]"
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </span>
                    <span
                      className={`flex-grow text-left text-sm md:text-base transition-colors duration-300 ${
                        activeService === service ? "textcolor " : "textcolor"
                      }`}
                    >
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full p-4 md:p-8 textcolor overflow-y-auto h-[80vh] custom-scrollbar">
            <div className="space-y-8 pb-12">
              <div
                ref={setServiceRef(activeService)}
                className="p-6 rounded-lg w-full max-w-5xl mx-auto"
              >
                <ServiceContent
                  activeService={activeService}
                  serviceContents={serviceContents}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - Shown from 1130px */}
        <div className="hidden lg:flex flex-1">
          <div className="w-1/4 bg-[#282828] p-4 md:p-6 flex flex-col items-center justify-center">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={servicesHeadingVariants}
              className="text-xl md:text-2xl  mb-6 md:mb-8 text-center textcolor merichfont"
            >
              Service Categories
            </motion.h2>
            <ul className="space-y-3 md:space-y-5 w-full flex flex-col items-center justify-center textcolor">
              {Object.keys(serviceContents).map((service, index) => (
                <motion.li
                  key={service}
                  initial="hidden"
                  animate="visible"
                  variants={sidebarItemVariants}
                  custom={index}
                  onClick={() => scrollToService(service)}
                  className="hover:bg-[#2c2b2b] p-2 rounded cursor-pointer textcolor w-full md:w-3/4 border-l  border-[#e2dcc8] pb-3"
                >
                  <div className="flex justify-between w-full items-center">
                    <span
                      className={`mr-2 md:mr-4 w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center text-xs md:text-sm p-2 transition-all duration-300 ${
                        activeService === service
                          ? "bg-[#26d3b4] border-[#26d3b4] border-2 text-black  roboto font-bold"
                          : "textcolor border-2 border-[#e2dcc8]"
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </span>
                    <span
                      className={`flex-grow text-left text-sm md:text-base transition-colors duration-300 ${
                        activeService === service ? "textcolor " : "textcolor"
                      }`}
                    >
                      {service}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 p-4 md:p-8 textcolor overflow-y-auto h-[80vh] custom-scrollbar">
            <div className="space-y-8 pb-12">
              {Object.entries(serviceContents).map(
                ([serviceName, serviceData]) => (
                  <div
                    key={serviceName}
                    ref={setServiceRef(serviceName)}
                    className="p-6 rounded-lg"
                  >
                    <ServiceContent
                      activeService={serviceName}
                      serviceContents={serviceContents}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
