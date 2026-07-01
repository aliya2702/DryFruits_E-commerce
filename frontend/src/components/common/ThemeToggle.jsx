import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-stone-900 dark:bg-stone-850 hover:bg-stone-800 dark:hover:bg-stone-800 border border-stone-800 dark:border-stone-800 text-amber-500 hover:text-amber-400 dark:text-amber-400 transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
      aria-label="Toggle Theme"
    >
      <span className="text-lg leading-none">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default ThemeToggle;
