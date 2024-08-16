<script setup lang="ts">

</script>
<template>
    <div class="w-full py-5 bg-primaryBlue flex flex-col justify-center items-center">
        <h1 class="text-center font-poppins font-semibold text-2xl text-white">Cheerup Comments</h1>

    
   
<form>
   <div class="w-full mb-4  rounded-lg">
       <div class="bg-white rounded-t-lg mt-4">
           <textarea id="comment" rows="4" cols="50" class="text-sm p-4 text-gray-900 bg-white border-0 focus:ring-0 text-left" placeholder="Write a comment..." required ></textarea>
       </div>
       <button type="submit" class="inline-flex items-center mt-2 py-2.5 px-4 text-xs font-medium text-center text-black bg-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
        </button>   
   </div>
</form>

<!--cheerup comments-->

    <div class="flex justify-center flex-col">
                   <div class="m-4">
                    <p class="inline-flex justify-start items-center mr-3 text-sm text-white font-semibold">
                        <img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="User 1">User 1</p>
                    <p class="text-white pl-4">
                        "You've trained so hard, and it shows! Keep pushing, we're all rooting for you!"
                    </p>
                   </div>

                   <div class="m-4">
                    <p class="inline-flex justify-start items-center mr-3 text-sm text-white font-semibold">
                        <img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="User 1">User 1</p>
                    <p class="text-white pl-4">
                        "You've trained so hard, and it shows! Keep pushing, we're all rooting for you!"
                    </p>
                   </div>
    </div>
    </div>
</template>
<style scoped>

</style>