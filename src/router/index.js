import Vue from 'vue';
import Router from 'vue-router';
import AsyncRoute from '@/utilities/asyncRoute';

const Home = () => import('@/pages/Home');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...['ExampleOne', 'ExampleTwo', 'ExampleThree', 'ExampleFour'].map(AsyncRoute),
  ],
});
