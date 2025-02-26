import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // 3 seconds per rotation
        'spin-fast': 'spin 0.5s linear infinite', // 0.5 seconds per rotation
        'spin-custom': 'spin 2s linear infinite', // 2 seconds per rotation
      },
    },
  },
  plugins: [],
} satisfies Config;
