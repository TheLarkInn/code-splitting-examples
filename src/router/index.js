import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/pages/Home');

Vue.use(Router);

const AsyncRoute = routeName => ({
  path: `/${routeName}`,
  name: routeName,
  component: () => import(`@/pages/${routeName}`),
});

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
