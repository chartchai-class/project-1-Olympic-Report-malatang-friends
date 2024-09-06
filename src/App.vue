<script setup lang="ts">
  import { RouterView } from 'vue-router';

  import { SpeedInsights } from '@vercel/speed-insights/vue';

</script>

<template>
  <div>
    <SpeedInsights/>
    <RouterView />
  </div>
</template>


