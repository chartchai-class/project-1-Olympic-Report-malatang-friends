<script setup lang="ts">
  import medalTable from '@/components/homepageMedalTable.vue'
  import { type MedalRank } from '@/types'
  import {ref,onMounted,computed,watchEffect} from 'vue'
  import OlympicService from '@/services/OlympicAPIServices'
  import { useRouter } from 'vue-router'
  import inputBar from '@/components/inputBar.vue'
  import background from '@/assets/background.png';
  import logo from '@/assets/OlympicLogoWhite.png';

  import  gold  from "@/assets/gold1.png";
import silver  from "@/assets/silver1.png";
import bronze  from "@/assets/bronze1.png";

  const router = useRouter()

  const ranks=ref<MedalRank[] | null>(null)
  const totalRanks=ref(0)

  const hasNextPage=computed(()=>{
    const totalPages=Math.ceil(totalRanks.value/10)
    return page.value<totalPages
  })

  const props = defineProps({
    page:{
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)



  onMounted(()=>{
    watchEffect(()=>{
      OlympicService.getRanks(10, page.value)
      .then((response)=>{
        const allData=response.data.data;
        const startIndex = (page.value - 1) * 10;
        const endIndex = startIndex + 10;
        ranks.value=allData.slice(startIndex,endIndex);
        totalRanks.value=allData.length;
       
      })
      .catch(()=>{
        router.push({name: 'NetworkError'})
      })
    })
  })
</script>

<template>
<div class="bg-scroll bg-no-repeat bg-cover bg-center text-center"  :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 149, 233, 0.7) 8%, rgba(26, 58, 99, 0.7) 42%), url(${ background })` }">
    <!--new element-->
    <div class="justify-center flex">
    <img
          class="w-[200px] h-[200px] text-center"
          :src="logo"
          alt="Olympic 2024 Paris"
        />
  </div>
    <div class="pt-10 mx-10 mb-10">
      <inputBar />
    </div>
    <div class="flex flex-col items-center">
      <h1 class="font-poppins font-semibold text-2xl text-white mb-8">
        2024 Paris Olympic Medal Ranking
      </h1>

     <div class="overflow-x-auto">
        <table class="table-auto min-w-full rounded border-separate border-spacing-y-3">
        <thead class="sticky top-0  bg-primaryBlue text-left bg-gray-900 tracking-wider text-white  ">
          <tr>
            <th class="p-3 text-center">Rank</th>
            <th class="p-2 text-white text-opacity-0 text-center ">Flag</th>
            <th class="p-3 text-center">Country</th>
            <th class="p-3 text-center">Gold
               <img :src="gold" alt="gold-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
            </th>
            <th class="p-3 text-center">Silver
               <img :src="silver" alt="silver-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
            </th>
            <th class="p-3 text-center">Bronze
              <img :src="bronze" alt="bronze-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
            </th>
            <th class="p-3 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          
          <medalTable v-for="ranking in ranks" :key="ranking.rank" :ranking="ranking" />
        </tbody>
    </table>
     </div>

    <div class="flex pb-28 pt-8 pagination">
      <RouterLink class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :to="{name: 'home-view',query:{page:page-1}}"
      rel="prev"
      v-if="page!=1"
      >Prev
      </RouterLink>

      <!-- v-if="hasNextPage" -->
      <RouterLink 
      class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :to="{name:'home-view',query:{page:page+1}}"
      rel="next"
      v-if="hasNextPage"
      >Next
      </RouterLink>
    </div>
    </div>
  </div>
</template>