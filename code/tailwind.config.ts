import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.875rem", // Adjusted for better readability (30px)
              marginTop: theme("spacing.6"), // Uses spacing scale for consistency
              marginBottom: theme("spacing.4"),
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              fontSize: "1.5rem", // 24px
              marginTop: theme("spacing.5"),
              marginBottom: theme("spacing.3"),
              fontWeight: theme("fontWeight.semibold"),
            },
            p: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.2"),
              lineHeight: theme("lineHeight.relaxed"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")], // Ensure the plugin is loaded
};

export default config;
