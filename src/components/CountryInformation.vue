<script setup lang="ts">
  
  import { defineProps, ref } from 'vue';
  import { type Page } from '@/types';

  const props=defineProps<{
    country: Page | null;
  }>();


  const showExtract = ref<boolean>(false);

  const  displayextract=()=>{
    if(props.country ){
    return showExtract.value ? props.country.extract : props.country.extract.slice(0, 500)+"...........";
       
    }
   
    return ''; //no country data yet
    
  }
  const toogleExtract = () => {
    showExtract.value = !showExtract.value;
  };

</script>
<template>
  <div class="bg-white px-8">
    <h1 class="font-semibold text-2xl text-sky-900 my-2">
      Country Information
    </h1>
    <div>
      <img
        :src="country?.thumbnail.source"
        :alt="country?.title"
        class="hover:animate-bounce w-32 h-auto"
      />
    </div>

    <h1 v-if="country" class="font-semibold text-xl text-sky-400 my-2">
      {{ country.title }}
    </h1>
    <p v-if="country">
      {{ displayextract() }}
    </p>
    <button
      @click="toogleExtract"
      class="bg-primaryBlue my-2 text-white py-2 px-4 rounded-lg shadow-sp"
    >
      {{ showExtract ? 'See Less' : 'See More' }} 
    </button>
  </div>
</template>
