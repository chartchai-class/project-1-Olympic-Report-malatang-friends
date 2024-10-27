import axios, { Axios, type AxiosResponse } from 'axios';

import apiClient from './AxiosClient';

export default {
  getRank() {
    return apiClient.get('/home');
  },
  getRanks(perPage: Number, page: Number) {
    return apiClient.get('/home' + '?_limit=' + perPage + '&_page=' + page);
  },
  getMedalWithSportId(id: number) {
    return apiClient.get('/countrydetails/'+id, {
      params: { id },
    });
  }
};
