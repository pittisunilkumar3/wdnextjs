import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Head from "next/head";

const merich = localFont({
  src: "../fonts/merich.ttf",
  variable: "--font-merich",
});

const roboto = localFont({
  src: "../fonts/Roboto-Thin.ttf",
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Handle mobile viewport height
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initial value
    setVH();

    // Update on resize and orientation change
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  return (
    <>
      <Head>
        <title>WEBDADDY | A Business Creation Digital Agency</title>
        <link rel="icon" href="/WEBDADDY-LOGO-SQAURE.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* waves video */}
        <link rel="preload" as="video" href="/wavescom.mp4" type="video/mp4" />
      </Head>
      <div className={`${merich.variable} ${roboto.variable} font-sans`}>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
