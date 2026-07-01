import apiClient from "./apiClient";

export const locationService = {
  /**
   * Fetch all brick-and-mortar store locations.
   */
  getStores: async () => {
    return apiClient.get("/locations/stores");
  },

  /**
   * Fetch active operating hours or special holiday hours for a store location.
   * @param {string} storeId
   */
  getStoreHours: async (storeId) => {
    return apiClient.get(`/locations/stores/${storeId}/hours`);
  }
};
