import axios, { Axios, type AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cfaef2cc-2a38-4135-b81b-a179cf52e24d.mock.pstmn.io/demo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getRank() {
    return apiClient.get('/');
  },
  getRanks(perPage: Number, page: Number) {
    return apiClient.get('/' + '?_limit=' + perPage + '&_page=' + page);
  },
  getMedalWithSport(id: string) {
    return apiClient.get('/', {
      params: { id },
    });
  },
};
