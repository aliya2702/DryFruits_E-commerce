import React, { useState, useCallback } from "react";
import { debounce } from "../../utils/debounce";

/**
 * Reusable search input with animated placeholder, debounced onChange, and clear button.
 *
 * @param {object} props
 * @param {string} [props.placeholder='Search products...']
 * @param {Function} [props.onSearch] - Callback fired with the debounced search value.
 * @param {number} [props.debounceMs=350] - Debounce delay in ms.
 * @param {string} [props.className]
 */
function SearchInput({
  placeholder = "Search products...",
  onSearch,
  debounceMs = 350,
  className = "",
}) {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (onSearch) onSearch(query);
    }, debounceMs),
    [onSearch, debounceMs]
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  const handleClear = () => {
    setValue("");
    if (onSearch) onSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search icon */}
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 text-sm pointer-events-none">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-stone-950 dark:bg-stone-900 border border-stone-800 hover:border-stone-700 focus:border-amber-500/50 text-stone-200 placeholder:text-stone-600 text-sm rounded-xl pl-10 pr-10 py-2.5 outline-none transition-colors duration-300"
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-300 hover:bg-stone-800 text-xs transition-colors cursor-pointer"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchInput;
