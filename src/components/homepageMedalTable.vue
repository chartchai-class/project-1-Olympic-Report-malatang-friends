<script setup lang="ts">
import { type MedalRank } from '@/types'
defineProps<{
  ranking: MedalRank
}>()
</script>


<template>
    <tr class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white px-8 rounded-sm">
      <th class="p-3">{{ranking.rank}}</th>
      <th><img :src="ranking.flag_url" class="w-12 flex bg-right"></img></th>
      <th class="p-3 flex text-center justify-center">{{ranking.name}}</th>
      <th class="p-3">{{ranking.gold_medals}}</th>
      <th class="p-3">{{ranking.silver_medals}}</th>
      <th class="p-3">{{ranking.bronze_medals}}</th>
      <th class="p-3">{{ranking.total_medals}}</th>
    </tr>
</template>


<style></style>