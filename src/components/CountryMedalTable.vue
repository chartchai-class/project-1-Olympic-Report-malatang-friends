<script setup lang="ts"></script>
<template>
  <div class="px-8">
    <h1 class="font-poppins font-semibold text-2xl text-sky-900 mb-8">
      Lists of Sports
    </h1>

    <table class="table-auto w-full rounded border-separate border-spacing-y-3">
      <thead class="text-left bg-gray-900 tracking-wider">
        <tr>
          <th class="p-3">Sports Name</th>
          <th class="p-3">Gold</th>
          <th class="p-3">Silver</th>
          <th class="p-3">Bronze</th>
          <th class="p-3">Total</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white rounded"
        >
          <td class="p-3">Swimming</td>
          <td class="p-3">5</td>
          <td class="p-3">4</td>
          <td class="p-3">4</td>
          <td class="p-3">13</td>
        </tr>

        <tr
          class="odd:bg-primaryGreen even:bg-primaryGrey mt-6 text-white rounded"
        >
          <td class="p-3">Badminton</td>
          <td class="p-3">5</td>
          <td class="p-3">4</td>
          <td class="p-3">4</td>
          <td class="p-3">13</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
