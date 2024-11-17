import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "var(--shadow-3xl)",
        "4xl": "var(--shadow-4xl)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          blur: "var(--background-blur)",
          secondary: "var(--background-secondary)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
        },
        card: "var(--card)",
        border: "var(--border)",
        malibu: {
          DEFAULT: "var(--malibu)",
          foreground: {
            DEFAULT: "var(--malibu-foreground)",
            darker: "var(--malibu-foreground-darker)",
            constantDark: "var(--malibu-foreground-dark-constant)",
          },
          50: "var(--malibu-50)",
          100: "var(--malibu-100)",
          200: "var(--malibu-200)",
          300: "var(--malibu-300)",
          400: "var(--malibu-400)",
          500: "var(--malibu-500)",
          600: "var(--malibu-600)",
          700: "var(--malibu-700)",
          800: "var(--malibu-800)",
          900: "var(--malibu-900)",
        },
        slate: {
          DEFAULT: "var(--slate)",
          foreground: {
            DEFAULT: "var(--slate-foreground)",
            darker: "var(--slate-foreground-darker)",
            constantDark: "var(--slate-foreground-dark-constant)",
          },
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)",
          950: "var(--slate-950)",
        },
        green: {
          DEFAULT: "var(--green)",
          foreground: {
            DEFAULT: "var(--green-foreground)",
            darker: "var(--green-foreground-darker)",
            constantDark: "var(--green-foreground-dark-constant)",
          },
          50: "var(--green-50)",
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
          800: "var(--green-800)",
          900: "var(--green-900)",
        },
        rose: {
          DEFAULT: "var(--rose)",
          foreground: {
            DEFAULT: "var(--rose-foreground)",
            darker: "var(--rose-foreground-darker)",
            constantDark: "var(--rose-foreground-dark-constant)",
          },
          50: "var(--rose-50)",
          100: "var(--rose-100)",
          200: "var(--rose-200)",
          300: "var(--rose-300)",
          400: "var(--rose-400)",
          500: "var(--rose-500)",
          600: "var(--rose-600)",
          700: "var(--rose-700)",
          800: "var(--rose-800)",
          900: "var(--rose-900)",
        },
        peach: {
          DEFAULT: "var(--peach)",
          foreground: {
            DEFAULT: "var(--peach-foreground)",
            darker: "var(--peach-foreground-darker)",
            constantDark: "var(--peach-foreground-dark-constant)",
          },
          50: "var(--peach-50)",
          100: "var(--peach-100)",
          200: "var(--peach-200)",
          300: "var(--peach-300)",
          400: "var(--peach-400)",
          500: "var(--peach-500)",
          600: "var(--peach-600)",
          700: "var(--peach-700)",
          800: "var(--peach-800)",
          900: "var(--peach-900)",
        },
        lavender: {
          DEFAULT: "var(--lavender)",
          foreground: {
            DEFAULT: "var(--lavender-foreground)",
            darker: "var(--lavender-foreground-darker)",
            constantDark: "var(--lavender-foreground-dark-constant)",
          },
          50: "var(--lavender-50)",
          100: "var(--lavender-100)",
          200: "var(--lavender-200)",
          300: "var(--lavender-300)",
          400: "var(--lavender-400)",
          500: "var(--lavender-500)",
          600: "var(--lavender-600)",
          700: "var(--lavender-700)",
          800: "var(--lavender-800)",
          900: "var(--lavender-900)",
        },
        biloba: {
          DEFAULT: "var(--biloba)",
          foreground: {
            DEFAULT: "var(--biloba-foreground)",
            darker: "var(--biloba-foreground-darker)",
            constantDark: "var(--biloba-foreground-dark-constant)",
          },
          50: "var(--biloba-50)",
          100: "var(--biloba-100)",
          200: "var(--biloba-200)",
          300: "var(--biloba-300)",
          400: "var(--biloba-400)",
          500: "var(--biloba-500)",
          600: "var(--biloba-600)",
          700: "var(--biloba-700)",
          800: "var(--biloba-800)",
          900: "var(--biloba-900)",
        },
      },
      fontFamily: {
        sans: "var(--figtree)",
      },
    },
  },
  plugins: [],
} satisfies Config;
