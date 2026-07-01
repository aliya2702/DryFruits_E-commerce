import { useState, useEffect } from "react";

/**
 * A custom hook that tracks and returns the current scroll position of the window.
 * 
 * @returns {object} An object containing scrollY and scrollX positions.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    // Handler to call on scroll
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handler immediately to get initial scroll position
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
