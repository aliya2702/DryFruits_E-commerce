/**
 * Scrolls the window viewport to the top.
 * 
 * @param {string} [behavior='smooth'] - The scroll transition animation behavior ('smooth' or 'auto').
 */
export function scrollToTop(behavior = "smooth") {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  }
}

export default scrollToTop;
