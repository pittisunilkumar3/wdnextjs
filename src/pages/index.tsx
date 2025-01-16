import ScrollLayout from "../components/ScrollLayout";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import HeroFour from "./HeroFour";
import About from "./About";
import Team from "./Team";
import AdditionalPageOne from "./AdditionalPageOne";
import Services from "./Services";
import AdditionalPageTwo from "./AdditionalPageTwo";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import AdditionalPageThree from "./AdditionalPageThree";
import Blog from "./Blog";
import Contact from "./Contact";

const navigationItems = [
  { href: "#home", title: "Home", letter: "H" },
  { href: "#about", title: "About", letter: "A" },
  { href: "#services", title: "Services", letter: "S" },
  { href: "#portfolio", title: "Portfolio", letter: "P" },
  { href: "#blog", title: "Blog", letter: "B" },
  { href: "#contact", title: "Contact", letter: "C" },
];

export default function HomePage() {
  return (
    <ScrollLayout
      sidebar={
        <Sidebar>
          <div className="h-full flex flex-col">
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col h-full textcolor">
              {/* Mobile Header with Close Button */}
              <div className="p-6 mb-8">
                {/* Close button will be handled by ScrollLayout */}
              </div>

              {/* Logo Section */}
              <div className="px-4 mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img
                      src="/WEBDADDY-LOGO-CIRCLE.svg"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold textcolor merichfont">
                    WEBDADDY
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="px-4 space-y-4 flex-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 hover:bg-accent rounded-lg transition-colors roboto font-bold"
                  >
                    <span className="text-base textcolor roboto font-bold ">
                      {item.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex flex-col items-center h-full">
              {/* Logo at top with consistent padding */}
              <div className="pt-8 pb-12">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src="/WEBDADDY-LOGO-CIRCLE.svg"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation centered in the remaining space */}
              <nav className="flex-1 flex flex-col justify-center ">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.href}
                    className="relative group flex flex-col items-center roboto font-bold"
                  >
                    {index > 0 && (
                      <div className="text-[#26d3b4] text-xl h-10 flex items-center">
                        ·
                      </div>
                    )}
                    <a
                      href={item.href}
                      className="relative w-10 h-10 rounded-lg hover:bg-accent flex items-center justify-center transition-colors textcolor group"
                    >
                      <span className="text-lg roboto font-bold">
                        {item.letter}
                      </span>
                      {/* Tooltip - Modified positioning */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 px-4 py-2  text-[#26d3b4] text-sm rounded-lg 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all
                         shadow-lg 
                        w-[80px] text-center z-50
                        translate-y-2 top-full roboto font-bold"
                      >
                        {item.title}
                      </div>
                    </a>
                  </div>
                ))}
              </nav>

              {/* Bottom spacing to match top */}
              <div className="pb-8" />
            </div>
          </div>
        </Sidebar>
      }
    >
      <Home />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <About />
      <Team />
      <AdditionalPageOne />
      <Services />
      <AdditionalPageTwo />
      <Projects />
      <Portfolio />
      <AdditionalPageThree />
      <Blog />
      <Contact />
    </ScrollLayout>
  );
}
