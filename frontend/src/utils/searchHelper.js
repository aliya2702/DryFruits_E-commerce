/**
 * Filters an array of objects based on a text query matching specific key fields.
 * 
 * @param {Array<object>} items - The list of items to search through.
 * @param {string} query - The search query term.
 * @param {Array<string>} searchKeys - The object keys to scan (e.g. ['name', 'description']).
 * @returns {Array<object>} The filtered list of items.
 */
export function searchItems(items, query, searchKeys) {
  if (!items || !Array.isArray(items)) return [];
  if (!query || query.trim() === "") return items;

  const normalizedQuery = query.toLowerCase().trim();

  return items.filter((item) => {
    return searchKeys.some((key) => {
      const value = item[key];
      if (value === undefined || value === null) return false;
      return String(value).toLowerCase().includes(normalizedQuery);
    });
  });
}

export default searchItems;
