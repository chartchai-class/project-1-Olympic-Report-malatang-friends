<script setup lang="ts">
import medalTable from '@/components/homepageMedalTable.vue';
import type { CountrySpring } from '@/types';
import { ref, onMounted, computed, watchEffect, inject, watch } from 'vue';
import OlympicService from '@/services/OlympicAPIServices';
import background from '@/assets/background.png';
import logo from '@/assets/OlympicLogoWhite.png';
import gold from '@/assets/gold1.png';
import silver from '@/assets/silver1.png';
import bronze from '@/assets/bronze1.png';
import searchLogo from '@/assets/searchlogo.png';
import { RouterLink, useRouter } from 'vue-router';

const inputValue = ref<string>(''); // Change to string
const defaultPerPage = ref<number>(10);

const handleSearch = (event: Event) => {
    event.preventDefault();
    const input = inputValue.value;

    // Check if input is a number
    const parsedNumber = parseInt(input, 10);
    if (!isNaN(parsedNumber)) {
        defaultPerPage.value = parsedNumber; 
        fetchCountries()// Set the number of countries
    } else {
        // Set country search name or handle accordingly
        searchCountries(input); // Call the function to search countries by name
    }
    console.log(defaultPerPage.value);
};

const router = useRouter();
const ranks = ref<CountrySpring[]>([]);
const totalRanks = ref(0);

const props = defineProps({
    page: {
        type: Number,
        required: true,
    },
    perPage: {
        type: Number,
        default: 10,
        required: true,
    },
});

function fetchCountries(){
  OlympicService.getCountries('',defaultPerPage.value,1)
  .then((response)=>{
    console.log(response.data);
      ranks.value = response.data; // Adjust if the data structure requires
      totalRanks.value = response.data.length;
  })
  .catch((error)=>{
    console.error('Error fetching countries: ',error)
  })
}

// Function to search countries by name
const searchCountries = (countryName: string) => {
    OlympicService.getCountries() // Assuming this service gets all countries
        .then((response) => {
<<<<<<< HEAD
            const allData = response.data;
            ranks.value = allData.filter((country: CountrySpring) => 
                country.countryName.toLowerCase().includes(countryName.toLowerCase())
            );
            totalRanks.value = ranks.value.length; // Update total ranks based on search
        })
        .catch(() => {
            router.push({ name: 'NetworkError' });
        });
};

watch(
    defaultPerPage,
    (newValue) => {
        if (newValue != undefined && newValue != null) {
            defaultPerPage.value = newValue;
        }
    },
    { immediate: true }
);

const page = computed(() => props.page);

const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalRanks.value / defaultPerPage.value);
    return page.value < totalPages;
});

onMounted(() => {
    watchEffect(() => {
        OlympicService.getRanks(defaultPerPage.value, page.value)
            .then((response) => {
                const allData = response.data;

                const startIndex = (page.value - 1) * defaultPerPage.value;
                const endIndex = startIndex + defaultPerPage.value;

                ranks.value = allData.slice(startIndex, endIndex);
                totalRanks.value = allData.length;

            })
            .catch(() => {
                router.push({ name: 'NetworkError' });
            });
    });
});
</script>


<template>
  <div
    class="bg-scroll bg-no-repeat bg-cover bg-center text-center"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 149, 233, 0.7) 8%, rgba(26, 58, 99, 0.7) 42%), url(${background})`,
    }"
  >
    <!--new element-->
    <div class="justify-center flex">
      <img
        class="w-[200px] h-[200px] text-center"
        :src="logo"
        alt="Olympic 2024 Paris"
      />
    </div>
    <div class="pt-10 mx-10 mb-10">
      <!-- <inputBar /> -->
      <form
        class="shadow-lg max-w-md mx-auto hover:scale-105 transform transition duration-500 ease-in-out"
      >
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="h-4 w-4 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </div>
          <form @submit="handleSearch">
            <input
              v-model.number="inputValue"
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter number of countries"
              required
            />
            <div class="border-1 border-blue-500">
              <button
                class="text-[#1A3A63] flex outline-blue-700 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <img :src="searchLogo" alt="search" class="mr-1 w-5 h-5" />
                Search
              </button>
            </div>
          </form>
        </div>
      </form>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="font-poppins font-semibold text-2xl text-white mb-8">
        2024 Paris Olympic Medal Ranking
      </h1>

      <div class="overflow-x-auto">
        <table
          class="table-auto min-w-full rounded border-separate border-spacing-y-3"
        >
          <thead
            class="sticky top-0 bg-primaryBlue text-left bg-gray-900 tracking-wider text-white"
          >
            <tr>
              <th class="p-3 text-center">Rank</th>
              <th class="p-2 text-white text-opacity-0 text-center">Flag</th>
              <th class="p-3 text-center">Country</th>
              <th class="p-3 text-center">
                Gold
                <img
                  :src="gold"
                  alt="gold-medal"
                  class="inline-block brightness-100 w-5 h-5 mb-2"
                />
              </th>
              <th class="p-3 text-center">
                Silver
                <img
                  :src="silver"
                  alt="silver-medal"
                  class="inline-block brightness-100 w-5 h-5 mb-2"
                />
              </th>
              <th class="p-3 text-center">
                Bronze
                <img
                  :src="bronze"
                  alt="bronze-medal"
                  class="inline-block brightness-100 w-5 h-5 mb-2"
                />
              </th>
              <th class="p-3 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
      
            <medalTable
              v-for="ranking in ranks"
              :key="ranking.id"
              :ranking="ranking"
            />
          </tbody>
        </table>
      </div>

      <div class="flex pb-28 pt-8 pagination">
        <RouterLink
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:text-white hover:bg-secondaryBlue shadow-lg hover:shadow-indigo-500/4 hover:scale-105 transform transition duration-500 ease-in-out"
          :to="{ name: 'home-view', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >Prev
        </RouterLink>

        <!-- v-if="hasNextPage" -->
        <RouterLink
          class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:text-white hover:bg-secondaryBlue shadow-lg hover:shadow-indigo-500/4 hover:scale-105 transform transition duration-500 ease-in-out"
          :to="{ name: 'home-view', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          >Next
        </RouterLink>
      </div>
    </div>
  </div>
</template>