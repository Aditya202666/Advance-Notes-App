import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scrollbarTrack: "rgba(240, 240, 240, 0.8)",
        scrollbarThumb: "#ccc",
        color_primary_100: "var(--color-primary-100)",
        color_primary_200: "var(--color-primary-200)",
        color_primary_300: "var(--color-primary-300)",
        color_primary_400: "var(--color-primary-400)",
        color_primary_500: "var(--color-primary-500)",
        color_primary_600: "var(--color-primary-600)",
        color_primary_700: "var(--color-primary-700)",
        color_primary_800: "var(--color-primary-800)",
        color_primary_900: "var(--color-primary-900)",
        color_success_100: "var(--color-success-100)",
        color_success_200: "var(--color-success-200)",
        color_success_300: "var(--color-success-300)",
        color_success_400: "var(--color-success-400)",
        color_success_500: "var(--color-success-500)",
        color_success_600: "var(--color-success-600)",
        color_success_700: "var(--color-success-700)",
        color_success_800: "var(--color-success-800)",
        color_success_900: "var(--color-success-900)",
        color_info_100: "var(--color-info-100)",
        color_info_200: "var(--color-info-200)",
        color_info_300: "var(--color-info-300)",
        color_info_400: "var(--color-info-400)",
        color_info_500: "var(--color-info-500)",
        color_info_600: "var(--color-info-600)",
        color_info_700: "var(--color-info-700)",
        color_info_800: "var(--color-info-800)",
        color_info_900: "var(--color-info-900)",
        color_warning_100: "var(--color-warning-100)",
        color_warning_200: "var(--color-warning-200)",
        color_warning_300: "var(--color-warning-300)",
        color_warning_400: "var(--color-warning-400)",
        color_warning_500: "var(--color-warning-500)",
        color_warning_600: "var(--color-warning-600)",
        color_warning_700: "var(--color-warning-700)",
        color_warning_800: "var(--color-warning-800)",
        color_warning_900: "var(--color-warning-900)",
        color_danger_100: "var(--color-danger-100)",
        color_danger_200: "var(--color-danger-200)",
        color_danger_300: "var(--color-danger-300)",
        color_danger_400: "var(--color-danger-400)",
        color_danger_500: "var(--color-danger-500)",
        color_danger_600: "var(--color-danger-600)",
        color_danger_700: "var(--color-danger-700)",
        color_danger_800: "var(--color-danger-800)",
        color_danger_900: "var(--color-danger-900)",
      },
      scrollbar: {
        width: '8px',
        borderRadius: '4px',
    },
    },
  },
  plugins: [],
};
