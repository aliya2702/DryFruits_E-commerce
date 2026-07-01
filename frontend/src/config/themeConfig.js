/**
 * Theme configuration handling mode toggles and breakpoint behavior.
 */
export const themeConfig = {
  defaultTheme: "dark", // "dark", "light", or "system"
  supportSystemTheme: true,
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  // Animation classes to append on theme toggle to trigger CSS transitions
  transitionClass: "theme-transition", 
};
