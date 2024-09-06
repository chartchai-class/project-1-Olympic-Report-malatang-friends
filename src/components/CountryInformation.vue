<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import flag from '@/assets/flag.png';
  import { type Page } from '@/types';

  const props = defineProps<{
    country: Page | null;
  }>();

  const showExtract = ref<boolean>(false);

  const displayextract = () => {
    if (props.country) {
      return showExtract.value
        ? props.country.extract
        : props.country.extract.slice(0, 500) + '...........';
    }

    return ''; //no country data yet
  };
  const toogleExtract = () => {
    showExtract.value = !showExtract.value;
  };
</script>
<template>
  <div class="bg-white px-8">

    <h1
      class="font-semibold text-2xl text-sky-900 my-2 mb-5 hover:text-blue-500"
    >
      Country Information
    </h1>
    <div class="cursor-pointer drop-shadow-2xl">
      <img
        :src="country?.thumbnail.source"
        :alt="country?.title"
        class="contrast-125 rounded-lg hover:animate-wiggle"
        width="200"
        height="300"
      />
    </div>

    <h1
      v-if="country"
      class="font-semibold text-xl text-sky-400 my-2 mt-6 mb-3 hover:text-blue-600"
    >
      {{ country.title }}
    </h1>
    <p
      v-if="country"
      class="font-medium text-l text-black hover:text-gray-500 tracking-wide cursor-pointer"
    >
      {{ displayextract() }}
    </p>
    <button
      @click="toogleExtract"
      class="bg-primaryBlue my-2 text-white py-2 px-4 mt-8 rounded-lg shadow-sp hover:bg-secondaryBlue hover:ring hover:ring-green-300 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
    >
      {{ showExtract ? 'See Less' : 'See More' }}

    </button>
  </div>
</template>
