/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", "class"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6f5e6",
          200: "#c2e0c2",
          300: "#9ecb9e",
          400: "#7ab67a",
          500: "#56a156",
          600: "#3d8c3d",
          700: "#2b772b",
          800: "#1a611a",
          900: "#0a4c0a",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        neutral: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      clipPath: {
        custom: "polygon(18% 0%, 100% 0%, 100% 100%, -10% 100%)",
      },
      keyframes: {
        slideInFromLEFT: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInFromTop: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        animLineUp: {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        ripple: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        slideInFromLEFT: "slideInFromLEFT 2s ease-in forwards",
        slideInFromTop: "slideInFromTop 3s ease-out forwards",
        slideInFromRight: "slideInFromRight 4s ease-out forwards",
        animLineUp: "animLineUp 6s ease-out forwards",
        ripple: "ripple 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      backgroundColor: {
        "neutral-900": "#171717",
      },
      textColor: {
        "neutral-900": "#171717",
      },
      borderRadius: {
        button: "4px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        "2xl": "1250px",
        clip: "1250px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

module.exports = config;
