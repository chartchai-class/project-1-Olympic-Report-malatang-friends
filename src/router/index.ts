import { createRouter, createWebHistory } from 'vue-router';
import Countrydetails from '@/views/Countrydetails.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';
import nProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/countrydetails',
      name: 'CountryDetails',
      component: Countrydetails,
    },
    {
      path: '/404/notFound',
      name: '404-notfound',
      component: NotFound,
      props: true,
  
    },
    {
      path: '/networkError',
      name: 'NetworkError',
      component: NetworkError,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
      props: true,
    },
  ],
});

router.beforeEach(() => {
  nProgress.start();
});
router.afterEach(() => {
  nProgress.done();
});

export default router;
