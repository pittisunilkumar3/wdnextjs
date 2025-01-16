import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";
import { blogs } from "@/data/blogs";
import Head from "next/head";

const Blog: FC = () => {
  const router = useRouter();

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

  const blogHeadingVariants = {
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

  useEffect(() => {
    // Store the scroll position when leaving the blog page
    const handleBeforeUnload = () => {
      sessionStorage.setItem("previousSection", "blog");
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <meta name="description" content="A Business Creation Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" /> */}
      </Head>
      
      <section
        className="min-h-screen w-full bg-[#1b1b1b] text-white p-6 py-24 md:py-32"
        id="#blog"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center space-x-4 mb-16">
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
              variants={blogHeadingVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  outline-text merichfont"
            >
              BLOG
            </motion.span>
          </div>
          <div className="space-y-16">
            {blogs.map((blog, index) => {
              const isEvenIndex = index % 2 === 1;
              const ref = useRef(null);
              const isInView = useInView(ref, { once: false, amount: 0.1 });

              return (
                <motion.div
                  ref={ref}
                  key={blog.id}
                  initial={{ opacity: 0, x: isEvenIndex ? 100 : -100 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEvenIndex ? 100 : -100 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  onClick={() => {
                    sessionStorage.setItem("previousSection", "blog");
                    sessionStorage.setItem(
                      "scrollPosition",
                      window.scrollY.toString()
                    );
                    router.push(`/blog/${blog.id}`);
                  }}
                  className="cursor-pointer"
                >
                  <Card
                    className={`bg-[#2b2b2b] flex flex-col md:flex-row overflow-hidden 
                    border-none transition-all duration-300
                    ${isEvenIndex ? "md:flex-row-reverse" : ""}
                    h-auto md:h-[300px]`}
                  >
                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, x: isEvenIndex ? -100 : 100 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: isEvenIndex ? -100 : 100 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                      }}
                      className="md:w-1/2 h-full max-h-[300px] relative"
                    >
                      <div className="w-full h-full relative">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#2b2b2b]"></div>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <CardContent className="p-6 md:w-1/2 flex flex-col justify-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 50 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: 0.6,
                        }}
                        className="text-5xl merichfont text-[#dfdfbf] mb-2 outline-text"
                      >
                        0{blog.id}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 50 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: 0.7,
                        }}
                      >
                        <CardTitle className="text-xl font-thin merichfont mb-2 textcolor">
                          {blog.title}
                        </CardTitle>
                        <p className="text-sm textcolor mb-4 roboto font-bold">
                          {blog.date}
                        </p>
                        <div className="w-16 h-[2px] bg-white/30 mb-4"></div>
                        <CardDescription
                          className=" line-clamp-2 textcolor roboto font-bold"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {blog.description}
                        </CardDescription>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
