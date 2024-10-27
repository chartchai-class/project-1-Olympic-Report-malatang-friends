<script setup lang="ts">
import { defineProps } from 'vue';
import { type Sport } from '@/types';
import gold from '@/assets/gold1.png';
import silver from '@/assets/silver1.png';
import bronze from '@/assets/bronze1.png';
import { ref } from 'vue';

const props = defineProps<{
  sports: Sport[];
}>();

const editSportName = ref<Record<string, boolean>>({});
const editGold = ref<Record<string, boolean>>({});
const editSilver = ref<Record<string, boolean>>({});
const editBronze = ref<Record<string, boolean>>({});

function saveField(editField: Record<string, boolean>, key: string) {
  editField[key] = false;
}
</script>

<template>
  <div class="px-8">
    <h1 class="font-poppins font-semibold text-2xl text-sky-900 mb-8">
      Lists of Sports
    </h1>
    <div class="overflow-y-scroll h-96">
      <table class="table-auto w-full rounded border-separate border-spacing-y-3">
        <thead class="sticky top-0 bg-primaryBlue text-left bg-gray-900 tracking-wider text-white">
          <tr>
            <th class="p-3">Sports Name</th>
            <th class="p-3">
              Gold
              <img :src="gold" alt="gold-medal" class="inline-block brightness-100 w-5 h-5 mb-2" />
            </th>
            <th class="p-3">
              Silver
              <img :src="silver" alt="silver-medal" class="inline-block brightness-100 w-5 h-5 mb-2" />
            </th>
            <th class="p-3">
              Bronze
              <img :src="bronze" alt="bronze-medal" class="inline-block brightness-100 w-5 h-5 mb-2" />
            </th>
            <th class="p-3">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="sport in props.sports" :key="sport.name" class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white rounded hover:text-black">
          
            <!-- Sports Name -->
            <td class="p-3" @dblclick="editSportName[sport.name] = true">
              <template v-if="editSportName[sport.name]">
                <input
                  v-model="sport.name"
                  @keyup.enter.prevent="saveField(editSportName, sport.name)"
                  class="w-32 h-16"
                  type="text"
                />
              </template>
              <template v-else>{{ sport.name }}</template>
            </td>

            <!-- Gold -->
            <td class="p-3" @dblclick="editGold[sport.name] = true">
              <template v-if="editGold[sport.name]">
                <input
                  type="number"
                  v-model="sport.gold"
                  @keyup.enter.prevent="saveField(editGold, sport.name)"
                  class="w-16"
                />
              </template>
              <template v-else>{{ sport.gold }}</template>
            </td>

            <!-- Silver -->
            <td class="p-3" @dblclick="editSilver[sport.name] = true">
              <template v-if="editSilver[sport.name]">
                <input
                  type="number"
                  v-model="sport.silver"
                  @keyup.enter.prevent="saveField(editSilver, sport.name)"
                  class="w-16"
                />
              </template>
              <template v-else>{{ sport.silver }}</template>
            </td>

            <!-- Bronze -->
            <td class="p-3" @dblclick="editBronze[sport.name] = true">
              <template v-if="editBronze[sport.name]">
                <input
                  type="number"
                  v-model="sport.bronze"
                  @keyup.enter.prevent="saveField(editBronze, sport.name)"
                  class="w-16"
                />
              </template>
              <template v-else>{{ sport.bronze }}</template>
            </td>

            <!-- Total -->
            <td class="p-3">{{ sport.gold + sport.silver + sport.bronze }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
textarea {
  resize: none;
}
</style>