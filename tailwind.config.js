import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      // themes: {
      //   extend: "light",
      //   "aura-light": {
      //     colors: {
      //       primary: {
      //         DEFAULT: "#9810fa",
      //       },
      //       /*         forground: "#f9fafb",
      //     muted: "#6a7282",
      //     "dashboard-item": "#364153",
      //     "msg-placeholder": "#99a1af",
      //     title: "#101828",
      //     "card-color": "#e5e7eb",
      //     "card-radius": "14px",
      //     "dropdown-item": "#0a0a0a",
      //     "border-msg-input": "#f7dcff",
      //     "share-btn-color": "#4a5565",
      //     "shadow-msg-input": "0px 1px 14px 2px #c75be133",
      //   */
      //     },
      //   },
      // },
    }),
  ],
};
