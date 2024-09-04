<script setup lang="ts">
import searchLogo from '@/assets/searchlogo.png';
import { ref, provide } from 'vue';

const inputValue = ref(null); 
const defaultperPage = ref(10); 

provide('pageOfNumber', defaultperPage);

const handleSearch = () => {

    defaultperPage.value = inputValue.value || 10;

console.log(`Searching with per page number: ${defaultperPage.value}`);
};
</script>


<template>
    <form class=" shadow-lg max-w-md mx-auto hover:scale-105 transform transition duration-500 ease-in-out">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="h-4 w-4 text-sky-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
            </svg>
            </div>
            <input v-model.number="inputValue" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number of countries" required />
            <div class="border-1 border-blue-500">            
                <button type="submit" @click="handleSearch" class="text-[#1A3A63] flex  outline-blue-700 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img :src="searchLogo" alt="search" class=" mr-1 w-5 h-5"/>
                    Search</button>
            </div>
        </div>
    </form>
</template>


<style></style>