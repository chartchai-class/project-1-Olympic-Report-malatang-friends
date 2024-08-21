import { createRouter, createWebHistory } from 'vue-router';
import Countrydetails from '@/views/Countrydetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/countrydetails',
      name: 'CountryDetails',
      component: Countrydetails,
    },
  ],
});
export default router;
