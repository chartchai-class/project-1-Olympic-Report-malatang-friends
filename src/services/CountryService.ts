import type { CountryInfo } from '@/types';
import axios, { type AxiosResponse } from 'axios';

const CountryApiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getCountryDetails(country: string) {
    const response: AxiosResponse = await CountryApiClient.get('', {
      params: {
        action: 'query',
        prop: 'pageimages|extracts',
        exintro: true,
        explaintext: true,
        format: 'json',
        origin: '*',
        redirects: true,
        titles: country,
      },
    });

    // Assuming the API returns data in a field named 'query.pages'
    const page =
      response.data.query.pages[Object.keys(response.data.query.pages)[0]];
    return page;
  },saveCountry(country: CountryInfo){
    return CountryApiClient.post('/country',country)
  }
};
