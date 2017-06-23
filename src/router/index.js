/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import ExampleOne from '@/pages/ExampleOne';
import ExampleTwo from '@/pages/ExampleTwo';
import ExampleThree from '@/pages/ExampleThree';
import ExampleFour from '@/pages/ExampleFour';
const Home = () => import(/* webpackChunkname: "home" */'@/pages/Home');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ExampleOne',
      name: 'ExampleOne',
      component: ExampleOne,
    },
    {
      path: '/ExampleTwo',
      name: 'ExampleTwo',
      component: ExampleTwo,
    },
    {
      path: '/ExampleThree',
      name: 'ExampleThree',
      component: ExampleThree,
    },
    {
      path: '/ExampleFour',
      name: 'ExampleFour',
      component: ExampleFour,
    },
    // ...['ExampleOne', 'ExampleTwo', 'ExampleThree', 'ExampleFour'].map(AsyncRoute),
  ],
});
