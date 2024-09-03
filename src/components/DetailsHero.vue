<script setup lang="ts">
  import background from '@/assets/background.png';
  import logo from '@/assets/OlympicLogoWhite.png';
</script>
<template>
  <div
    class="bg-cover bg-fixed bg-center h-58"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="bg-gradient-to-b from-sky-600">
      <div class="flex justify-center items-center h-58">
        <RouterLink :to="{name:'home-view'}">
          <img
          class="max-w-40 max-h-40 my-12"
          :src="logo"
          alt="Olympic 2024 Paris"
        />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
