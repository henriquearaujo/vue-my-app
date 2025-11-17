/**  no TailwindCSS v4, o tailwind.config.js NÃO é mais criado automaticamente — 
 * e na verdade os devs nem precisam dele para usar as classes padrão. */

/** @type {import('tailwindcss').Config} */
export default {
  // 🔹 O Tailwind agora escaneia automaticamente, mas é bom garantir:
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  // 🔹 Aqui você customiza o tema do projeto (cores, fontes, spacing etc.)
  theme: {
    extend: {
      // Exemplos de personalização (opcional)
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },

  // 🔹 Caso queira plugins futuros:
  plugins: [
    // require("@tailwindcss/forms"),   // bom para inputs estilizados
    // require("@tailwindcss/typography"),
  ],
}
