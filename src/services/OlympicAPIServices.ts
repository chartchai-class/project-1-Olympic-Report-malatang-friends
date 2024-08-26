import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://apis.codante.io/olympic-games/countries',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getRanks(perPage: Number, page:Number){
        return apiClient.get('/?_limit=' + perPage + '&_page=' + page)
    },
    getRank(){
        return apiClient.get('/')
    }
}