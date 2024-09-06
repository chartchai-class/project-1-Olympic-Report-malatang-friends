
<script setup lang="ts">
import { defineProps } from 'vue';
import { type Sport } from '@/types';
import  gold  from "@/assets/gold1.png";
import silver  from "@/assets/silver1.png";
import bronze  from "@/assets/bronze1.png";

  const props=defineProps<{
    sports: Sport[];
  }>();
</script>


<template>
  <div class="px-8">
    <h1 class="font-poppins font-semibold text-2xl text-sky-900 mb-8">
      Lists of Sports
    </h1>
     <div class="overflow-y-scroll h-96">
       <table class="table-auto w-full rounded border-separate border-spacing-y-3">
      <thead class="sticky top-0  bg-primaryBlue text-left bg-gray-900 tracking-wider text-white">
        <tr>
          <th class="p-3">Sports Name</th>
          <th class="p-3">Gold 
            <img :src="gold" alt="gold-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
          </th>
          <th class="p-3">Silver
             <img :src="silver" alt="silver-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
          </th>
          <th class="p-3">Bronze
             <img :src="bronze" alt="bronze-medal" class="inline-block brightness-100 w-5 h-5 mb-2"/>
          </th>
          <th class="p-3">Total</th>
        </tr>
      </thead>
     
          <tbody>
        <tr 
          v-for="sport in props.sports"
          :key="sport.name"
          class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white rounded hover:text-black"
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
   
  </div>
</template>


