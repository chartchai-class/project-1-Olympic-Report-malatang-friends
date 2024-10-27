import axios, { type AxiosResponse } from 'axios';

const CountryApiClient = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getCountryDetails(country: string): Promise<any>{
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
  },
};
