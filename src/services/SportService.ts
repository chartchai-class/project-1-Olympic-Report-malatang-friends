
import apiClient from './AxiosClient';


export default {
  // Update a specific sport by ID
  updateSport(countryId: number, sportData: any) {
    return apiClient.put(`/sports/${countryId}`, sportData);
  },
};
