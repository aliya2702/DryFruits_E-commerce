import { useTheme as useThemeContext } from "../context/ThemeContext";

/**
 * Custom hook to easily access and toggle dark/light theme context.
 * 
 * @returns {object} An object containing the current `theme` and the `toggleTheme` function.
 */
export function useTheme() {
  return useThemeContext();
}

export default useTheme;
