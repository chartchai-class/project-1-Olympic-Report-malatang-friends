<script setup lang="ts">
  import { ref,onMounted } from 'vue';
  import { useCommentStore } from '@/stores/comment';
  import { storeToRefs } from 'pinia';
 

 const props= defineProps<{
  username: string;
  userId: number;
  countryId:number}>()


  const commentStore = useCommentStore();
  const { comments } = storeToRefs(commentStore);
  const commentInput = ref('');


  console.log('Country ID:', props.countryId);
  //load comments 
  onMounted(()=>{
    commentStore.loadComments(props.userId,props.countryId);

  })

  const submitComment = () => {
    if (commentInput.value.trim()) {
      commentStore.submitComment(
        commentInput.value,

        props.userId,
        props.countryId);
       commentInput.value = '';
    }
  };
t
</script>
<template>
  <div class="w-full bg-primaryBlue flex flex-col justify-center items-center">
    <div class="flex flex-row items-center mx-3">
      <h1
        class="text-center font-poppins font-semibold text-2xl text-white animate-wiggle"
      >
        Cheer Up Comments
      </h1>
      <div
        style="width: 50%; height: 0; padding-bottom: 100%; position: relative"
      >
        <iframe
          src="https://giphy.com/embed/8YBx8YADjme8OfSBxT"
          width="80%"
          height="80%"
          style="position: absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="w-full mb-4 rounded-lg">
        <div class="bg-white rounded-t-lg">
          <textarea
            v-model="commentInput"
            id="comment"
            rows="4"
            cols="50"
            class="text-sm p-4 text-gray-900 bg-white border-0 focus:ring-0 text-left"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center mt-3 py-2.5 px-4 text-xs font-medium text-center text-black bg-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-secondaryBlue hover:text-white hover:ring hover:ring-green-300 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          Post comment
        </button>
      </div>
    </form>

    <!--cheerup comments-->

    <div class="flex justify-center flex-col">
      <div v-for="(comment, index) in comments" :key="index" class="m-4">
        <p
          class="inline-flex justify-start items-center mr-3 text-sm text-white font-semibold"
        >
          <img
            class="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
        
          />{{ username }}
        </p>
        <p class="text-white pl-4">
          {{  comment.comment }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
