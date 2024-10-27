import type { CommentState } from '@/types';
import { defineStore } from 'pinia';
import apiClient from '@/services/AxiosClient';
import { useAuthStore } from '@/stores/auth'

export const useCommentStore = defineStore('comment', {
  state: (): CommentState => ({
    comments: [],
  }),

  actions: {

    loadComments(userId:number){
      const authStore=useAuthStore();
      return apiClient
      .get(`/comments?userId=${userId}`,{
        headers: { Authorization: authStore.authorizationHeader }
      })
      .then((response)=>{
        this.comments=response.data;
        console.log(this.comments)
        return response;
      })
      .catch((error)=>{
        console.log(error)
      })
    },

    submitComment(comment: string, userId: number){
      return apiClient
      .post('/comments',
        {
          comment: comment,
          userId: userId
        })
        .then((response)=>{
          this.comments.push(response.data);
          return response;
        })
        .catch((err)=>{
          console.log(err.message)
        });
      },
    },
  });
