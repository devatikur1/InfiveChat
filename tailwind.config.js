/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // ===== Base Backgrounds =====
        bgPrimary: "#09090B",
        bgSecondary: "#0F1117",
        bgSoft: "#e3e3e3",

        // ===== Surfaces =====
        surface: "#0F1117",
        surfaceSoft: "#161B22",
        surfaceHard: "#0B0F15",

        // ===== Text =====
        textPrimary: "#F8FAFC",
        textMuted: "#94A3B8",
        textDark: "#525354",

        // ===== Accent =====
        accent: "#3B82F6",
        accentSoft: "#60A5FA",
        accentHover: "#2563EB",

        // ===== UI =====
        hover: "#1E293B",
        border: "#273244",
        boxHover: "#2F3C52",
        active: "#1D4ED8",

        // ===== Status =====
        success: "#22C55E",
        successSoft: "#14532D",

        warning: "#F59E0B",
        warningSoft: "#78350F",

        error: "#EF4444",
        errorSoft: "#881337",

        info: "#38BDF8",
        infoSoft: "#0C4A6E",
      },
    },
  },

  plugins: [],
};
