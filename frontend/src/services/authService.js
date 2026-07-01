import apiClient from "./apiClient";

export const authService = {
  /**
   * Log in user with credentials.
   * @param {object} credentials - { email, password }
   */
  login: async (credentials) => {
    return apiClient.post("/auth/login", credentials);
  },

  /**
   * Register a new customer.
   * @param {object} userData - { name, email, password }
   */
  register: async (userData) => {
    return apiClient.post("/auth/register", userData);
  },

  /**
   * Log out current user, clear tokens.
   */
  logout: async () => {
    return apiClient.post("/auth/logout");
  },

  /**
   * Fetch authenticated user's profile details.
   */
  getCurrentUser: async () => {
    return apiClient.get("/auth/me");
  },

  /**
   * Update profile details.
   * @param {object} profileData - Fields to update
   */
  updateProfile: async (profileData) => {
    return apiClient.put("/auth/profile", profileData);
  }
};
