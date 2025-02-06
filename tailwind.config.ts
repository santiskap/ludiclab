import type { Config } from "tailwindcss";

export default {
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
        frase: '#575555',
        naranja: '#e87434',
        turquesa: '#01B5AC',
        bg_gris: "#333333",
        bg_gris_claro: "#efefef",
      },
      scrollBehavior: ["smooth"],
      fontFamily: {
        montserrat: "var(--font-montserrat), sans-serif",
        poppins: "var(--font-poppins), sans-serif",
      },
      fontSize: {
        'somos': '1.75rem', // Tamaño de fuente personalizado
      },
      zIndex: {
        '-1': '-1',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },  
    },
  },
  plugins: [],
} satisfies Config;
