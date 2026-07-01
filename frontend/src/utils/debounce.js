/**
 * Returns a debounced version of the provided function that delays its execution 
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 * 
 * @param {Function} func - The callback function to debounce.
 * @param {number} wait - The delay in milliseconds.
 * @returns {Function} The debounced function.
 */
export function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default debounce;
