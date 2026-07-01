/**
 * Default color palette configuration for use in JS-driven styling (e.g. charts, SVGs, framer-motion).
 * Keeps JS logic in sync with Tailwind CSS tokens.
 */
export const defaultColors = {
  primary: "#f59e0b",   // amber-500
  secondary: "#d97706", // amber-600
  accent: "#fbbf24",    // amber-400
  
  background: {
    light: "#fafaf9",   // stone-50
    dark: "#0c0a09",    // stone-950
  },
  
  surface: {
    light: "#ffffff",   // white
    dark: "#1c1917",    // stone-900
  },
  
  text: {
    light: "#1c1917",   // stone-900
    dark: "#f5f5f4",    // stone-100
  },

  success: "#10b981",   // emerald-500
  warning: "#f59e0b",   // amber-500
  error: "#ef4444",     // red-500
  info: "#3b82f6",      // blue-500
};
