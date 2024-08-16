<script setup lang="ts">
   import DetailsHero from '@/components/DetailsHero.vue';
   import CountryInformation from '@/components/CountryInformation.vue';
   import CountryMedalTable from '@/components/CountryMedalTable.vue';
   
</script>
<template>
 
 <DetailsHero />
 <div class="md:container mx-auto my-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
            <CountryInformation/> 
         </div>

         <div>
            <CountryMedalTable/>
         </div>
        
      </div>
 
 </div>

 


 
    

</template>