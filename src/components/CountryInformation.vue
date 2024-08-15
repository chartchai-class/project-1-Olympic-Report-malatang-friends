<script setup lang="ts">
  import flag from '@/assets/flag.png';
</script>
<template>
  <div class="bg-white px-8">
    <h1 class="font-semibold text-2xl text-sky-900  my-2">Country Information</h1>
    <div >
        <img :src="flag" alt="Afghanistan Flag"  class="hover:animate-bounce w-32 h-auto"/> 
    </div>
    
    <h1 class="font-semibold text-xl text-sky-400  my-2">United States</h1>
    <p>
      The United States of America (USA or U.S.A.), commonly known as the United
      States (US or U.S.) or America, is a country primarily located in North
      America. It is a federal union of 50 states, which also includes its
      federal capital district of Washington, D.C., and 326 Indian reservations.
      The 48 contiguous states are bordered by Canada to the north and Mexico to
      the south. The State of Alaska is non-contiguous and lies to the
      northwest, while the State of Hawaii is an archipelago in the Pacific
      Ocean. The United States also asserts sovereignty over five major
      union
    </p>
    <button class="bg-primaryBlue my-2 text-white py-2 px-4 rounded-lg shadow-sp">See More</button>
  </div>
</template>
