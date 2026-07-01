/**
 * Formats a raw price value with specific decimal spaces, without a currency symbol.
 * Useful for text inputs, calculations, or clean numerical display.
 * 
 * @param {number} value - The raw price numeric value.
 * @param {number} [decimals=2] - Number of decimal places.
 * @returns {string} The formatted price string.
 */
export function formatPrice(value, decimals = 0) {
  if (value === undefined || value === null || isNaN(value)) {
    return "0";
  }
  
  return Number(value).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default formatPrice;
