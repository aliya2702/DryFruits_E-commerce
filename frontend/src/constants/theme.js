/**
 * Color design tokens for Bhavani Dryfruits and Chocolates styling system.
 * Tailored to match light/dark palettes.
 */
export const THEME_COLORS = {
  // Primary brand color
  primaryLight: "amber-600",
  primaryDark: "amber-400",
  
  // Ambient yellow accents
  accentLight: "yellow-600",
  accentDark: "yellow-200",
  
  // Background tones
  bgLight: "stone-50",
  bgDark: "stone-950",
  
  // Surface blocks
  surfaceLight: "stone-100",
  surfaceDark: "stone-900",
  
  // Borders
  borderLight: "stone-200",
  borderDark: "stone-850",
};

/**
 * Standard transition durations (in seconds) for motion animations.
 */
export const ANIMATION_DURATIONS = {
  splashScreen: 2.2,
  splashFade: 0.6,
  fadeEntrance: 0.6,
  heroEntrance: 0.8,
  hoverSpring: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};
