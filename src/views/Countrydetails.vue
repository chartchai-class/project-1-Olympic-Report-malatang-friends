<script setup lang="ts">
  import DetailsHero from '@/components/DetailsHero.vue';
  import CountryInformation from '@/components/CountryInformation.vue';

  import { ref, onMounted, watchEffect } from 'vue';
  import countryService from '@/services/countryService';

  import type { Page } from '@/types';

  const country = ref<Page | null >(null);
  

  onMounted(() => {
watchEffect(() => {
    countryService.getCountryDetails('myanmar').then((response) => {
        country.value = response;
      console.log('Country:', country.value);
    }).catch((error) => {
      console.error('Error:', error);
    });
  });
  });
</script>

<template>
  <DetailsHero />
  <div class="columns-2">
    <CountryInformation :country="country" />
  
  </div>
</template>
