import { defineStore } from "pinia";
import axios from "axios";
import apiClient from "@/services/AxiosClient";
import type { User } from "@/types";


export const useAuthStore=defineStore('auth',{
    state:()=>({
        token:null as string | null,
        user: null as User | null
    }),
    getters:{
        currentUserName(): string{
            return this.user?.username || ''
        },
        isAdmin(): boolean{
            return this.user?.roles.includes('ROLE_ADMIN') || false
        },
        authorizationHeader(): string{
            return `Bearer ${this.token}`
        },
        currentUserId():number{
            return this.user?.id || 0
        }
    },
    actions:{
        register(email:string,username:string,password:string){
            return apiClient
            .post('/api/v1/auth/register',{
                email:email,
                username: username,
                password: password
            })
            .then((response)=>{
                this.token=response.data.access_token;
                this.user=response.data.user;
                localStorage.setItem('access_token',this.token as string)
                localStorage.setItem('user',JSON.stringify(this.user))
                console.log(localStorage.getItem('access_token'))
                console.log(localStorage.getItem('user'))
                axios.defaults.headers.common['Authorization']= `Bearer ${this.token}`
                return response
        
            })
        },
        login(username: string,password: string){
            return apiClient
            .post('/api/v1/auth/authenticate',{
                username: username,
                password: password
            })
            .then((response)=>{
                console.log(response.data)
                this.token=response.data.access_token
                this.user=response.data.user
                localStorage.setItem('access_token',this.token as string)
                localStorage.setItem('user',JSON.stringify(this.user))
                axios.defaults.headers.common['Authorization']= `Bearer ${this.token}`
                console.log(localStorage.getItem('access_token'));
                console.log(localStorage.getItem('user'));
                return response
            })
        },

        logout(){
            console.log('logout')
            this.token=null
            this.user=null
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
        },
        reload(token: string, user: User){
            this.token=token
            this.user=user
            
        }
    }
})

