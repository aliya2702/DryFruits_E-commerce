import apiClient from "./apiClient";

export const productService = {
  /**
   * Fetch all products with optional query filtering/sorting/pagination.
   * @param {object} params - query params (e.g. limit, category, sort)
   */
  getAllProducts: async (params = {}) => {
    return apiClient.get("/products", { params });
  },

  /**
   * Fetch a single product by its ID or slug.
   * @param {string} idOrSlug - Product identifier
   */
  getProductById: async (idOrSlug) => {
    return apiClient.get(`/products/${idOrSlug}`);
  },

  /**
   * Fetch list of product categories.
   */
  getCategories: async () => {
    return apiClient.get("/products/categories");
  },

  /**
   * Fetch best-selling products.
   */
  getBestSellers: async () => {
    return apiClient.get("/products/best-sellers");
  },

  /**
   * Search for products.
   * @param {string} query - Search keyword
   */
  searchProducts: async (query) => {
    return apiClient.get("/products/search", { params: { q: query } });
  }
};
