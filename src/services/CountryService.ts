import { type AxiosResponse } from 'axios'
import apiClient from './AxiosClient'
import type { CountryInfo } from '@/types'
import axios from "axios";


const CountryApiClient = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export default {
  getCountries(perPage: Number, page: Number) {
    return apiClient.get('/countries?_limit=' + perPage + '&_page=' + page)
  },
  getCountry() {
    return apiClient.get('/countries')
  },
  saveCountry(country: CountryInfo){
    return apiClient.post('/countries',country)
  },
  getCountriesByKeyword(keyword:string,perPage:number,page:number):
  Promise<AxiosResponse<CountryInfo[]>>{
    return apiClient.get<CountryInfo[]>('/countries?countryName='+keyword+'&_limit='+perPage+'&_page='+page)
  },
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
   }
  }
   