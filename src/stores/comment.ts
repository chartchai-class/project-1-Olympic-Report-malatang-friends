import type { CommentState } from "@/types";
import { defineStore } from "pinia";
export const useCommentStore=defineStore('comment',{
    state:():CommentState=>({
        comments:[]
    }),
    actions:{
        submitComment(comment:string):void{
            this.comments.push(comment)
        }
    }
})