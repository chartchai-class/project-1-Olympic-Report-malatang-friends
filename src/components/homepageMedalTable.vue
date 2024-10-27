<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { type CountrySpring } from '@/types';

  const router = useRouter();

  defineProps<{
    ranking: CountrySpring;
  }>();

 
  function navigateToCountryDetails(id: string) {
    router.push({ name: 'CountryDetails', params: { id } });
  } 
</script>

<template>
  <tr
    @click="navigateToCountryDetails(ranking.id.toString())"
    class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white px-8 rounded-sm cursor-pointer hover:text-black hover:bg-secondaryBlue shadow-lg hover:shadow-indigo-500/4 hover:scale-105 transform transition duration-500 ease-in-out"
  >

   <!-- <th class="p-3">{{ ranking.rank }}</th> -->
    <th><img :src="ranking.flag" class="w-12 flex bg-right" /></th>
    <th class="p-3 flex text-center justify-center">{{ ranking.countryName}}</th>
    <th class="p-3">{{ ranking.gold }}</th>
    <th class="p-3">{{ ranking.silver }}</th>
    <th class="p-3">{{ ranking.bronze }}</th>
    <th class="p-3">{{ ranking.totalMedals }}</th>
  </tr>
</template>


