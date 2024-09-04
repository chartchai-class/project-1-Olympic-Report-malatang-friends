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

  const props = defineProps({
    page:{
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)

  const totalRanks=ref(0)

  onMounted(()=>{
    watchEffect(()=>{
      OlympicService.getRanks(10, page.value)
      .then((response)=>{
        const allData=response.data.data;
        const startIndex = (page.value - 1) * 10;
        const endIndex = startIndex + 10;
        ranks.value=allData.slice(startIndex,endIndex);
       
      })
      .catch(()=>{
        router.push({name: 'NetworkError'})
      })
    })
  })
</script>

<template>
<div class="bg-scroll bg-no-repeat bg-cover bg-center text-center" :style="{ backgroundImage: `url(${ background })` } ">
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
      <table class="table-auto w-full rounded border-separate border-spacing-y-3 px-20">
        <thead class=" sticky top-0  bg-primaryBlue text-left bg-gray-900 tracking-wider text-white  ">
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

          <div class="flex justify-between items-center">
            <RouterLink
                class=" text-[#ffffff] text-left"
                id="page-prev"
                :to="{ }"
                rel="prev"
                
            >
             Prev Page</RouterLink
            >

            <RouterLink
                class=" text-[#ffffff] text-right"
                id="page-next"
                :to="{ }"
                rel="next"
                
            >
                Next Page
            </RouterLink>
        </div>
        
        </tbody>
    </table>
    </div>
  </div>
</template>