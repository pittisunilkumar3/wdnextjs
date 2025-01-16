import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { pagesConfig } from "./ScrollLayout";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer: React.FC = () => {
  const router = useRouter();
  const [numberOfLines, setNumberOfLines] = useState(8);

  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumberOfLines(5);
      } else if (width < 1024) {
        setNumberOfLines(8);
      } else {
        setNumberOfLines(10);
      }
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  const currentYear = new Date().getFullYear();

  const scrollToSection = async (id: string) => {
    // Check if we're on a blog post page
    if (router.pathname === "/blog/[id]") {
      // First navigate to home page
      await router.push("/");
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Original scrollToSection logic for home page
    const element = document.getElementById(id);
    if (!element) return;

    const isHorizontal = pagesConfig.find(
      (page) => page.id === id && page.type === "horizontal-first"
    );

    if (isHorizontal) {
      const index = pagesConfig.findIndex((page) => page.id === id);
      const horizontalSection = document.querySelector(".horizontal-panel");
      if (horizontalSection && index >= 0) {
        const isMobile = window.innerWidth < 768;
        let scrollPosition = 0;

        // Calculate scroll position based on index
        if (index === 0) {
          // Home
          scrollPosition = 0;
        } else if (index === 1) {
          // HeroTwo
          scrollPosition = isMobile
            ? window.innerWidth
            : window.innerWidth * 1.1;
        } else if (index === 2) {
          // HeroThree
          scrollPosition = isMobile
            ? window.innerWidth * 2
            : window.innerWidth * 2.2;
        } else if (index === 3) {
          // HeroFour
          scrollPosition = isMobile
            ? window.innerWidth * 3
            : window.innerWidth * 4.2;
        } else if (index === 4) {
          // About
          scrollPosition = isMobile
            ? window.innerWidth * 4
            : window.innerWidth * 5.2;
        }

        // Reset vertical scroll first
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        // Handle horizontal scroll
        const horizontalScroller = ScrollTrigger.getById("horizontal-scroll");
        if (horizontalScroller) {
          horizontalScroller.scroll(scrollPosition);
        }

        // Force GSAP to update
        ScrollTrigger.refresh();

        // Update URL hash after a small delay to ensure scroll is complete
        setTimeout(() => {
          window.history.pushState(null, "", `#${id}`);
        }, 100);
      }
    } else {
      // For vertical sections
      const verticalOffset =
        document.querySelector(".horizontal-section")?.getBoundingClientRect()
          .height || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - verticalOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const navigationLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Team", href: "team" },
    { name: "Services", href: "services" },
    { name: "Projects", href: "lastestprojects" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="bg-[#282828] text-[#e2dcc8] py-12 relative overflow-hidden w-full">
      <div className="lines absolute inset-0 w-full h-full pointer-events-none">
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
                transform: "rotate(0deg)",
                zIndex: 1,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {/* Logo and Company Name */}
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="loader w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative aspect-square mx-auto">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="logo">
              <Link 
                href="/" 
                className="block transform transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#26d3b4] rounded-full"
              >
                <Image
                  src="/WEBDADDY-LOGO-CIRCLE.svg"
                  alt="DeployTen Logo"
                  width={50}
                  height={50}
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <h2 className="text-3xl mt-4 merichfont textcolor text-center">
            WEBDADDY
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-1 pr-8">
          <h4 className="mb-4 text-[#26d3b4] font-semibold roboto">
            Navigation
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-[#e2dcc8] hover:text-[#26d3b4] transition-colors duration-300 text-sm roboto font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1 pl-8">
          <h4 className="mb-4 text-[#26d3b4] font-semibold roboto">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-[#e2dcc8]/80">
            <div>
              <h5 className="font-semibold roboto  text-[#e2dcc8]">Address</h5>
              <p className="roboto font-bold">
                22 Sin Ming Lane, #06-76 Midview City, Singapore 573969.
              </p>
            </div>
            <div>
              <h5 className="font-semibold roboto  text-[#e2dcc8]">Phone</h5>
              <a
                href="https://wa.me/6588061007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#26d3b4] transition-colors duration-300 roboto font-bold"
              >
                +65-88061007
              </a>
            </div>
            <div>
              <h5 className="font-semibold  roboto text-[#e2dcc8]">Email</h5>
              <a
                href="mailto:support@webdaddy.sg"
                className="hover:text-[#26d3b4] transition-colors duration-300 roboto font-bold"
              >
                support@webdaddy.sg
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e2dcc8]/20 mt-8 py-2 text-center relative z-10">
        <p className="text-sm text-[#e2dcc8]/50 roboto font-semibold">
          2024 WEBDADDY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
