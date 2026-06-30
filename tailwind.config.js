/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // =========================
        // Brand
        // =========================
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          dark: "#60A5FA",
        },

        secondary: {
          DEFAULT: "#14B8A6",
          hover: "#0D9488",
          dark: "#2DD4BF",
        },

        accent: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          dark: "#A78BFA",
        },

        // =========================
        // Background
        // =========================
        background: {
          DEFAULT: "#F8FAFC",
          dark: "#0F172A",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1E293B",
        },

        surface2: {
          DEFAULT: "#F1F5F9",
          dark: "#334155",
        },

        overlay: {
          DEFAULT: "#00000040",
          dark: "#00000090",
        },

        // =========================
        // Sidebar
        // =========================
        sidebar: {
          DEFAULT: "#FFFFFF",
          dark: "#111827",
        },

        sidebarHover: {
          DEFAULT: "#EEF2FF",
          dark: "#1F2937",
        },

        sidebarActive: {
          DEFAULT: "#DBEAFE",
          dark: "#374151",
        },

        // =========================
        // Navbar
        // =========================
        navbar: {
          DEFAULT: "#FFFFFF",
          dark: "#1E293B",
        },

        // =========================
        // Chat Area
        // =========================
        chat: {
          DEFAULT: "#F8FAFC",
          dark: "#0B1120",
        },

        sent: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },

        received: {
          DEFAULT: "#E2E8F0",
          dark: "#334155",
        },

        typing: {
          DEFAULT: "#CBD5E1",
          dark: "#475569",
        },

        // =========================
        // Input
        // =========================
        input: {
          DEFAULT: "#FFFFFF",
          dark: "#1E293B",
        },

        inputBorder: {
          DEFAULT: "#CBD5E1",
          dark: "#475569",
        },

        inputFocus: {
          DEFAULT: "#3B82F6",
          dark: "#60A5FA",
        },

        // =========================
        // Text
        // =========================
        text: {
          DEFAULT: "#0F172A",
          dark: "#F8FAFC",
        },

        textSecondary: {
          DEFAULT: "#64748B",
          dark: "#94A3B8",
        },

        textMuted: {
          DEFAULT: "#94A3B8",
          dark: "#64748B",
        },

        // =========================
        // Border
        // =========================
        border: {
          DEFAULT: "#E2E8F0",
          dark: "#334155",
        },

        borderHover: {
          DEFAULT: "#CBD5E1",
          dark: "#475569",
        },

        // =========================
        // Status
        // =========================
        success: {
          DEFAULT: "#22C55E",
          dark: "#4ADE80",
        },

        warning: {
          DEFAULT: "#F59E0B",
          dark: "#FBBF24",
        },

        error: {
          DEFAULT: "#EF4444",
          dark: "#F87171",
        },

        info: {
          DEFAULT: "#0EA5E9",
          dark: "#38BDF8",
        },

        online: {
          DEFAULT: "#22C55E",
        },

        offline: {
          DEFAULT: "#94A3B8",
        },

        away: {
          DEFAULT: "#F59E0B",
        },

        busy: {
          DEFAULT: "#EF4444",
        },

        // =========================
        // Misc
        // =========================
        skeleton: {
          DEFAULT: "#E2E8F0",
          dark: "#334155",
        },

        scrollbar: {
          DEFAULT: "#CBD5E1",
          dark: "#475569",
        },

        selection: {
          DEFAULT: "#BFDBFE",
          dark: "#1D4ED8",
        },
      },
    },
  },

  plugins: [],
};
