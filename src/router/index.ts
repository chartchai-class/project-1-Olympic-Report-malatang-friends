import { createRouter, createWebHistory } from 'vue-router';
import Countrydetails from '@/views/Countrydetails.vue';
import NotFound from '@/views/NotFoundError.vue';
import NetworkError from '@/views/NetworkError.vue';
import nProgress from 'nprogress';
import HomeView from '@/views/Homeview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
      }),
    },

    {
      path: '/countrydetails/:id',
      name: 'CountryDetails',
      component: Countrydetails,
      props: (route) => ({
        id: route.params.id,
      }),
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
