<script setup lang="ts">

    import { type Medal } from '@/types';
    import OlympicAPIServices from '@/services/OlympicAPIServices';
import { onMounted, ref } from 'vue';

    const medals=ref<Medal[] | null>(null)

    onMounted(()=>{
        OlympicAPIServices.getMedals()
        .then((response)=>{
    
         medals.value=response.data

        })
        .catch((error)=>{
            console.error('There was an error!',error)
        })
    })

    
</script>

<template>
   <h1>Top Countries</h1>

   <div v-for="medal in medals" :key="medal.id">
        <RouterLink class="text-blue-800" :to="{name:'CountryDetails',params:{id:medal.id}}">
            <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[6px] hover:scale-101 hover:shadow-sp">
        <img :src="medal.flag_url" :alt="medal.name + ' flag'" class="w-[50px] h-[30px] mb-[10px]" />
        <div class="flex justify-between">
            <h2>{{ medal.name }}</h2> 
            <h2>{{ medal.gold_medals }}</h2>
            <h2>{{ medal.silver_medals }}</h2>
            <h2>{{ medal.bronze_medals }}</h2>
            <h2>{{ medal.total_medals }}</h2>
        </div>
        </div>
        </RouterLink>
   </div>
   

</template>



<style scoped>

</style>