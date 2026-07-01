/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // ===== Base Backgrounds =====
        bgPrimary: "#000000",
        bgSecondary: "#353535",
        bgSoft: "",

        surface: "#0A0A0A",
        surfaceSoft: "#1c1c1c",
        surfaceHard: "#080808",

        // ===== Text =====
        textPrimary: "#FFFFFF",
        textMuted: "#7E7E7E",
        textDark: "#000000",

        // ===== Accent / Brand =====
        accent: "#3B82F6",
        accentSoft: "#60A5FA",
        accentHover: "#1c1c1c",

        // ===== UI States =====
        hover: "#191a1a",
        border: "#1A1A1A",
        boxHover: "#282828",
        active: "#191a1a",

        // ===== Status Colors =====
        success: "#10B981",
        successSoft: "#14532D",

        warning: "#FFB300",
        warningSoft: "#78350F",

        error: "#EF4444",
        errorSoft: "#881337",

        info: "#38BDF8",
        infoSoft: "#0B2A3A",
      },
    },
  },

  plugins: [],
};
