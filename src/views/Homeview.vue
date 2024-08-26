<script setup lang="ts">
  import medalTable from '@/components/homepageMedalTable.vue'
  import { type MedalRank } from '@/types'
  import {ref,onMounted,computed,watchEffect} from 'vue'
  import OlympicService from '@/services/OlympicAPIServices'
  import { useRouter } from 'vue-router'
  import inputBar from '@/components/inputBar.vue'
  import background from '@/assets/background.png';
  import logo from '@/assets/OlympicLogoWhite.png';

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
        ranks.value=response.data.data
        console.log(ranks.value)
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
      <h1 class="font-poppins font-semibold text-2xl text-sky-900 mb-8">
        2024 Paris Olympic Medal Ranking
      </h1>
      <table class="table-auto w-full rounded border-separate border-spacing-y-3 px-20">
        <thead class="text-left bg-gray-900 tracking-wider">
          <tr>
            <th class="p-3 text-center">Rank</th>
            <th class="p-2 text-white text-opacity-0 text-center ">Flag</th>
            <th class="p-3 text-center">Country</th>
            <th class="p-3 text-center">Gold</th>
            <th class="p-3 text-center">Silver</th>
            <th class="p-3 text-center">Bronze</th>
            <th class="p-3 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <medalTable v-for="ranking in ranks" :key="ranking.rank" :ranking="ranking"/>
        </tbody>
    </table>
    </div>
  </div>
</template>