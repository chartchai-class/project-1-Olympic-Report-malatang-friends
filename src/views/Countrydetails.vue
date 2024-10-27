<script setup lang="ts">
  import DetailsHero from '@/components/DetailsHero.vue';
  import CountryInformation from '@/components/CountryInformation.vue';

  import CountryMedalTable from '@/components/CountryMedalTable.vue';
  import Comments from '@/components/Comments.vue';
  import { ref, onMounted, watchEffect } from 'vue';
  import countryService from '@/services/CountryService';
  import OlympicAPIServices from '@/services/OlympicAPIServices';
  import type { Page, Medal } from '@/types';
  import { useRoute } from 'vue-router';
  import { useAuthStore } from '@/stores/auth'
  const authStore=useAuthStore()


  const country = ref<Page | null>(null);
  const medals = ref<Medal | null>(null);

  const route = useRoute();

  onMounted(() => {
    watchEffect(() => {
      const countryName = route.params.name as string;
      const countryId = parseInt(route.params.id.toString());

      //fetch country information
      countryService
        .getCountryDetails(countryName)
        .then((response) => {
          country.value = response;
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      //fetch medal details for each country
      OlympicAPIServices.getMedalWithSportId(countryId)
        .then((response) => {
          console.log('Reposnse from Country detail ', response.data);
          console.log('Sports', response.data.sports);

          if (response.data.sports) {
            // const countryData = response.data.find(
            //   (item: Medal) => item.id === countryId
            // );
            // if (countryData) {
            //   medals.value = countryData;
            // }
            medals.value = response.data;
          } else {
            console.error('Unexpected response format:', response.data);
          }
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
        <CountryMedalTable :sports="medals?.sports || []" />
      </div>
    </div>
  </div>
  <Comments v-if="authStore.currentUserId"
   :username="authStore.currentUserName" :userId="authStore.currentUserId"/>
</template>
