/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import ExampleTwo from '@/pages/ExampleTwo';
import ExampleThree from '@/pages/ExampleThree';
import ExampleFour from '@/pages/ExampleFour';
const Home = () => import(/* webpackChunkName: "Home" */'@/pages/Home');
const ExampleOne = () => import(/* webpackChunkName: "ExampleOne" */'@/pages/ExampleOne');

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
