import { createRouter, createWebHistory } from 'vue-router';
import Countrydetails from '@/views/Countrydetails.vue';
import NotFound from '@/views/NotFoundError.vue';
import NetworkError from '@/views/NetworkError.vue';
import nProgress from 'nprogress';
import HomeView from '@/views/Homeview.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import UsersView from '@/views/UsersView.vue';
import CountryAddingForm from '@/views/CountryAddingForm.vue';
import { idText } from 'typescript';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/home',
      name: 'home-view',
      component: HomeView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        perPage: parseInt(route.query.perPage?.toString() || '10'),
      }),
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path: '/countrydetails/:id/:name',
      name: 'CountryDetails',
      component: Countrydetails,
      props: (route) => ({
        name: route.params.name,
        id:  parseInt(route.params.id.toString()) ,
      }),
    },
    {
      path:'/users',
      name:'users',
      component: UsersView
    },
    {
      path:'/addcountry',
      name:'addCountry',
      component: CountryAddingForm
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
