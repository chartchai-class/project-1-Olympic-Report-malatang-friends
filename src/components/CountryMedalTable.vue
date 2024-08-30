<script setup lang="ts">
import { defineProps } from 'vue';
import { type Sport } from '@/types';

  const props=defineProps<{
    sports: Sport[];
  }>();
</script>


<template>
  <div class="px-8">
    <h1 class="font-poppins font-semibold text-2xl text-sky-900 mb-8">
      Lists of Sports
    </h1>

    <table class="table-auto w-full rounded border-separate border-spacing-y-3">
      <thead class="text-left bg-gray-900 tracking-wider">
        <tr>
          <th class="p-3">Sports Name</th>
          <th class="p-3">Gold</th>
          <th class="p-3">Silver</th>
          <th class="p-3">Bronze</th>
          <th class="p-3">Total</th>
        </tr>
      </thead>

      <tbody>
        <tr 
          v-for="sport in props.sports"
          :key="sport.name"
          class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white rounded"
        >
          <td class="p-3">{{ sport.name }}</td>
          <td class="p-3">{{ sport.gold }}</td>
          <td class="p-3">{{sport.silver}}</td>
          <td class="p-3">{{sport.bronze}}</td>
          <td class="p-3">{{ sport.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
