import { type AxiosResponse } from 'axios'
import apiClient from './AxiosClient'
import type { CountryInfo } from '@/types'
import axios from "axios";



export default {


  saveCountry(country: CountryInfo){
    return apiClient.post('/countries',country)
  },
  // getCountriesByKeyword(keyword:string,perPage:number,page:number):
  // Promise<AxiosResponse<CountryInfo[]>>{
  //   return apiClient.get<CountryInfo[]>('/countries?countryName='+keyword+'&_limit='+perPage+'&_page='+page)
  // },
  //  async getCountryDetailsByCountryName(country: string): Promise<any>{
  //    const response: AxiosResponse = await apiClient.get('', {
  //      params: {
  //        action: 'query',
  //        prop: 'pageimages|extracts',
  //        exintro: true,
  //        explaintext: true,
  //        format: 'json',
  //        origin: '*',
  //        redirects: true,
  //        titles: country,
  //      },
  //    });
  //    // Assuming the API returns data in a field named 'query.pages'
  //    const page =
  //      response.data.query.pages[Object.keys(response.data.query.pages)[0]];
  //    return page;
  //  }
 async getCountryDetailsByCountryId(countryId:number){
    return apiClient.get(`/countrydetails/${countryId}`,);

  }
  
 
  }
   