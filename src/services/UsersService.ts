import { type AxiosResponse } from 'axios'
import apiClient from "./AxiosClient";

export default{
    getUsers(perPage: Number, page: Number){
        return apiClient.get('/users?_limit='+perPage+'&_page='+page)
    },
    updateUserRole(userId: Number,newRole:string){
        return apiClient.put(`/users/${userId}/role`, { role: newRole })
    },
    // getUsers(){
    //     return apiClient.get('/users')
    // }
}