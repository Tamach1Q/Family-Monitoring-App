import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f8faf9",
        "surface-soft": "#f2f4f3",
        "surface-muted": "#e7ece9",
        primary: "#4c635a",
        "primary-soft": "#cfe1d7",
        "primary-accent": "#88a096",
        secondary: "#8f4c30",
        "secondary-soft": "#ffdbce",
        tertiary: "#52625b",
        outline: "#d5dad7",
        "text-strong": "#1a1f1c",
        "text-muted": "#5b635f",
        success: "#53735b",
        "success-soft": "#d8eadc",
        "warning-soft": "#f8e4d8"
      },
      boxShadow: {
        card: "0 14px 30px rgba(46, 56, 50, 0.06)",
        floating: "0 20px 45px rgba(76, 99, 90, 0.12)"
      },
      borderRadius: {
        panel: "28px"
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(207, 225, 215, 0.95), transparent 52%), radial-gradient(circle at top right, rgba(255, 219, 206, 0.5), transparent 40%)"
      }
    }
  },
  plugins: []
} satisfies Config;
