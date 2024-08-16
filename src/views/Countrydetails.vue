<script setup lang="ts">
  import DetailsHero from '@/components/DetailsHero.vue';
  import CountryInformation from '@/components/CountryInformation.vue';
  import CountryMedalTable from '@/components/CountryMedalTable.vue';
  import Comments from '@/components/Comments.vue';
  import { ref, onMounted, watchEffect } from 'vue';
  import countryService from '@/services/CountryService';

  import type { Page } from '@/types';

  const country = ref<Page | null>(null);

  onMounted(() => {
    watchEffect(() => {
      countryService
        .getCountryDetails('myanmar')
        .then((response) => {
          country.value = response;
          console.log('Country:', country.value);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
</script>
<template>
  <DetailsHero />
  <div class="md:container mx-auto my-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <CountryInformation :country="country" />
      </div>

      <div>
        <CountryMedalTable />
      </div>
    </div>
  </div>
  <Comments />
</template>
