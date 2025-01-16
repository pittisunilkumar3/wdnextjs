import React, { useEffect, useRef, useState, HTMLAttributes } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Progress } from "@/components/ui/progress";

// Add this new styled component for global styles
const GlobalStyles = () => (
  <style jsx global>{`
    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }

    /* Hide scrollbar for Firefox */
    * {
      scrollbar-width: none !important;
    }

    /* Hide scrollbar for IE and Edge */
    * {
      -ms-overflow-style: none !important;
    }

    /* Ensure body and html also have scrollbars hidden */
    html,
    body {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }

    /* Target the main container and horizontal section specifically */
    .horizontal-section,
    .vertical-sections {
      -ms-overflow-style: none !important;
      scrollbar-width: none !important;
    }
  `}</style>
);

// Define the pages configuration
export const pagesConfig = [
  // Home section now horizontal
  { id: "home", type: "horizontal-first" },

  // First Horizontal section (before about)
  { id: "herotwo", type: "horizontal-first" },
  { id: "herothree", type: "horizontal-first" },
  { id: "herofour", type: "horizontal-first" },
  { id: "about", type: "horizontal-first" },

  // Vertical sections after about
  { id: "team", type: "vertical" },
  { id: "additionalpageone", type: "vertical" },
  { id: "services", type: "vertical" },
  { id: "additionalpagetwo", type: "vertical" },
  { id: "lastestprojects", type: "vertical" },
  { id: "portfolio", type: "vertical" },
  { id: "additionalpagethree", type: "vertical" },
  { id: "blog", type: "vertical" },
  { id: "contact", type: "vertical" },
];

interface ScrollLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

// Add form related types
type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface FormData {
  countryCode: string;
  [key: string]: string;
}

export default function ScrollLayout({ children, sidebar }: ScrollLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobileView, setIsMobileView] = useState(true);

  // Move formData state inside the component
  const [formData, setFormData] = useState<FormData>({
    countryCode: "",
    // Add other initial form fields here
  });

  // Handle input changes for all form elements
  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add scroll to hash function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const isHorizontal = pagesConfig.find(
      (page) => page.id === id && page.type === "horizontal-first"
    );

    if (isHorizontal) {
      const index = pagesConfig.findIndex((page) => page.id === id);
      const horizontalSection = horizontalRef.current;
      if (horizontalSection && index >= 0) {
        const isMobile = window.innerWidth < 768;
        let scrollPosition = 0;

        // Calculate scroll position
        for (let i = 0; i < index; i++) {
          if (i === 0 || i === 1) {
            scrollPosition += isMobile
              ? window.innerWidth
              : window.innerWidth * 1.1;
          } else if (i === 2 && !isMobile) {
            scrollPosition += window.innerWidth * 2;
          } else {
            scrollPosition += window.innerWidth;
          }
        }

        // Reset vertical scroll first
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        // Then handle horizontal scroll
        const horizontalScroller = ScrollTrigger.getById("horizontal-scroll");
        if (horizontalScroller) {
          horizontalScroller.scroll(scrollPosition);
        } else {
          horizontalSection.scrollLeft = scrollPosition;
        }

        // Force GSAP to update
        ScrollTrigger.refresh();

        // Calculate and update progress based on index
        const horizontalProgress = index / (firstHorizontalPages.length - 1);
        calculateProgress(horizontalProgress, 0);
      }
    } else {
      // For vertical sections
      const verticalOffset =
        document.querySelector(".horizontal-section")?.getBoundingClientRect()
          .height || 0;

      // Special handling for blog section
      if (id === "blog") {
        const blogElement = document.getElementById("blog");
        if (blogElement) {
          const elementPosition =
            blogElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      } else {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - verticalOffset;

        // Calculate total document height and vertical section positions
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const verticalIndex = verticalPages.findIndex((page) => page.id === id);
        const totalVerticalPages = verticalPages.length;

        // Scroll to the section
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });

        // Calculate vertical progress more accurately
        const verticalProgress = (verticalIndex + 1) / totalVerticalPages;
        const horizontalProgress = 1; // Since we're in vertical section, horizontal is complete

        // Update progress
        const totalProgress = horizontalProgress * 0.5 + verticalProgress * 0.5;
        setProgress(totalProgress * 100);
      }
    }

    // Update URL hash and close mobile menu
    window.history.pushState(null, "", `#${id}`);
    setIsMobileMenuOpen(false);
  };

  // Handle hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        scrollToSection(hash);
      }
    };

    // Initial hash check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const horizontalSection = horizontalRef.current;
    const sections = gsap.utils.toArray<HTMLElement>(".horizontal-panel");

    if (horizontalSection && sections.length > 0) {
      const isMobile = window.innerWidth < 768;

      // if (isMobile) {
      //   // Mobile-specific implementation with snap scrolling
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: horizontalSection,
      //       start: "top top",
      //       end: () => `+=${window.innerWidth * (sections.length - 1)}`,
      //       pin: true,
      //       scrub: 1,
      //       snap: {
      //         snapTo: 1 / (sections.length - 1),
      //         duration: { min: 0.2, max: 0.3 },
      //         delay: 0,
      //         ease: "power1.inOut",
      //       },
      //       id: "horizontal-scroll",
      //       invalidateOnRefresh: true,
      //       onUpdate: (self) => {
      //         calculateProgress(self.progress, 0);

      //         if (self.progress === 1) {
      //           horizontalSection.style.pointerEvents = "none";
      //         } else {
      //           horizontalSection.style.pointerEvents = "auto";
      //         }
      //       },
      //     },
      //   });

      if (isMobile) {
        // Enhanced mobile-specific implementation with smoother scrolling
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: () => `+=${window.innerWidth * (sections.length - 1)}`,
            pin: true,
            scrub: 1.5, // Increased scrub value for smoother scrolling
            snap: {
              snapTo: (value) => {
                const st = ScrollTrigger.getById("horizontal-scroll");
                const velocity = st ? Math.abs(st.getVelocity()) : 0;
                if (velocity > 2500) {
                  return Math.min(Math.floor(value * (sections.length - 1) + 2), sections.length - 1) / (sections.length - 1);
                } else if (velocity > 1500) {
                  return Math.min(Math.floor(value * (sections.length - 1) + 1), sections.length - 1) / (sections.length - 1);
                }
                return Math.round(value * (sections.length - 1)) / (sections.length - 1);
              },
              duration: 0.5,
              delay: 0.1,
              ease: "power1.inOut",
            },
            preventOverlaps: true,
            fastScrollEnd: false,
            onUpdate: (self) => {
              // Prevent rapid scrolling by checking scroll velocity
              if (Math.abs(self.getVelocity()) > 1000) {
                self.scroll(self.scroll() - self.getVelocity() * 0.001);
              }
            },
            },
          });

        tl.to(sections, {
          x: () => -(window.innerWidth * (sections.length - 1)),
          ease: "none",
          immediateRender: true,
        });
        
      } else {
        // Enhanced desktop/tablet implementation
        let totalWidth = 0;
        sections.forEach((_, index) => {
          if (index === 0 || index === 1) {
            totalWidth += window.innerWidth * 1.1;
          } else if (index === 2) {
            totalWidth += window.innerWidth * 2;
          } else {
            totalWidth += window.innerWidth;
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: () => `+=${totalWidth - window.innerWidth}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            id: "horizontal-scroll",
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              calculateProgress(self.progress, 0);

              if (self.progress === 1) {
                horizontalSection.style.pointerEvents = "none";
              } else {
                horizontalSection.style.pointerEvents = "auto";
              }
            },
          },
        });

        tl.to(sections, {
          x: () => -(totalWidth - window.innerWidth),
          ease: "none",
          immediateRender: true,
          lazy: false,
          willChange: "transform",
        });

        // Add smooth scroll settings
        ScrollTrigger.config({
          limitCallbacks: true,
          ignoreMobileResize: true,
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
        });

        // Refresh ScrollTrigger after a small delay to ensure proper initialization
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 100);
      }
    }

    // Improved vertical scroll listener
    const handleVerticalScroll = () => {
      const horizontalSectionHeight = window.innerHeight;
      const totalDocHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;
      const maxScroll = totalDocHeight - window.innerHeight;

      // Calculate overall progress as a percentage of total scrollable area
      const overallProgress = currentScroll / maxScroll;

      // If we're in the horizontal section (first half of total progress)
      if (currentScroll < horizontalSectionHeight) {
        const horizontalProgress = currentScroll / horizontalSectionHeight;
        calculateProgress(horizontalProgress * 0.5, 0);
      }
      // If we're in vertical sections (second half of total progress)
      else {
        const verticalScrollable = totalDocHeight - horizontalSectionHeight;
        const verticalProgress =
          (currentScroll - horizontalSectionHeight) / verticalScrollable;
        // Start from 50% (after horizontal) and go to 100%
        const adjustedProgress = 0.5 + verticalProgress * 0.5;
        setProgress(Math.min(Math.max(adjustedProgress * 100, 0), 100));
      }
    };

    window.addEventListener("scroll", handleVerticalScroll);
    // Initial calculation
    handleVerticalScroll();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("scroll", handleVerticalScroll);
    };
  }, []);

  // Convert children to array for easier manipulation
  const childrenArray = React.Children.toArray(children);
  const firstHorizontalPages = pagesConfig.filter(
    (page) => page.type === "horizontal-first"
  );
  const verticalPages = pagesConfig.filter((page) => page.type === "vertical");

  // Update the calculateProgress function
  const calculateProgress = (
    horizontalProgress: number = 0,
    verticalProgress: number = 0
  ) => {
    // Ensure both progress values are between 0 and 1
    horizontalProgress = Math.min(Math.max(horizontalProgress, 0), 1);
    verticalProgress = Math.min(Math.max(verticalProgress, 0), 1);

    // Calculate total progress (horizontal takes first 50%, vertical takes second 50%)
    const totalProgress = horizontalProgress * 0.5 + verticalProgress * 0.5;
    setProgress(Math.min(Math.max(totalProgress * 100, 0), 100));
  };

  // Add scroll trigger for the last section
  useEffect(() => {
    const lastSection = document.getElementById("contact");
    if (lastSection) {
      ScrollTrigger.create({
        trigger: lastSection,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress === 1) {
            setProgress(100); // Ensure we reach 100% at the bottom
          }
        },
      });
    }
  }, []);

  // Add logo click handler
  const handleLogoClick = () => {
    scrollToSection("home");
  };

  // Add this useEffect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add this at the start of your useEffect
  // gsap.config({
  //   force3D: true,
  //   autoSleep: 60,
  //   nullTargetWarn: false,
  // });
  gsap.config({
    force3D: true,
    autoSleep: 60,
    nullTargetWarn: false,
  });

  return (
    <div className="flex min-h-screen w-full">
      <GlobalStyles />
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 rounded-lg  border border-border"
      >
        <svg
          className="w-6 h-6 menucolor"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar - Mobile overlay and desktop fixed */}
      {sidebar && (
        <>
          {/* Mobile Overlay Background */}
          <div
            className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-[55] lg:hidden ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar Content */}
          <aside
            className={`fixed lg:fixed top-0 left-0 h-screen bg-[#282828] border-r border-border z-[58] 
              w-64 lg:w-20 transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 flex flex-col`}
          >
            {/* Add padding to the entire sidebar content */}
            <div className="flex flex-col h-full py-6">
              {/* Logo section */}
              <div onClick={handleLogoClick} className="cursor-pointer mb-8">
                {React.isValidElement(sidebar) &&
                  React.Children.map(sidebar, (child) => {
                    if (
                      React.isValidElement<HTMLAttributes<HTMLDivElement>>(
                        child
                      ) &&
                      child.type === "div" &&
                      child.props.className?.includes("logo")
                    ) {
                      return React.cloneElement(child, {
                        className: `${child.props.className} cursor-pointer`,
                      } as HTMLAttributes<HTMLDivElement>);
                    }
                    return child;
                  })}
              </div>

              {/* Routes section - wrap in a div that takes remaining space */}
              <div className="flex-1">
                {React.isValidElement(sidebar) &&
                  React.Children.map(sidebar, (child) => {
                    if (
                      React.isValidElement<HTMLAttributes<HTMLDivElement>>(
                        child
                      ) &&
                      child.type === "div" &&
                      !child.props.className?.includes("logo")
                    ) {
                      return child;
                    }
                    return null;
                  })}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] ">
              <Progress
                value={100 - progress}
                className="h-full w-[1px] rounded-none"
                orientation="vertical"
                indicatorStyles={{
                  transform: "translateY(100%)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </aside>
        </>
      )}

      {/* Main content area */}
      <main
        ref={containerRef}
        className={`relative w-full ${sidebar ? "lg:ml-20" : ""}`}
      >
        {/* Horizontal Scroll Section */}
        <section
          ref={horizontalRef}
          className="relative h-screen w-full overflow-hidden bg-background"
          style={{ height: "100vh" }}
        >
          <div
            className="absolute top-0 left-0 flex h-full"
            style={{
              width: `${firstHorizontalPages.length * 100}vw`,
              gap: 0,
              paddingRight: "1px",
              height: "100vh",
              transform: "translateY(0)",
            }}
          >
            {firstHorizontalPages.map((page, index) => (
              <div
                key={`horizontal-${index}`}
                id={page.id}
                className={`
                  horizontal-panel 
                  ${
                    index === 0 || index === 1
                      ? "w-screen md:w-[110vw]"
                      : index === 2
                      ? "w-screen md:w-[200vw]"
                      : "w-screen"
                  }
                  h-full flex-shrink-0 flex items-center justify-center
                  [transform:translate3d(0,0,0)]
                  will-change-transform
                `}
                style={{
                  marginRight: !isMobileView ? "-1px" : "0",
                  height: "100vh",
                }}
              >
                {childrenArray[index]}
              </div>
            ))}
          </div>
        </section>

        {/* Vertical Sections Container */}
        <div className="relative w-full vertical-sections">
          {verticalPages.map((page, index) => (
            <section
              key={`vertical-${index}`}
              id={page.id}
              className="relative w-full"
            >
              {childrenArray[firstHorizontalPages.length + index]}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
