<template>
  <div class="container">
    <h1>Route-based Code Splitting</h1>

    <code-example header="Router - Simple" filename="router/index.js">
      import Vue from 'vue';
      import Router from 'vue-router';

      const Home = () => import('../pages/Home');
      const About = () => import('../pages/About');

      export default new Router({
        routes: [
          {
            path: '/',
            name: 'Home',
            component: Home
          },
          {
            path: '/About',
            name: 'About',
            component: About
          }
        ]
      });
    </code-example>

    <code-example header="Router - Context Module" filename="router/index.js">
      import Vue from 'vue';
      import Router from 'vue-router';

      const Home = () => import('../pages/Home');

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
          ...['Contact', 'Support', 'About', 'webpack'].map(AsyncRoute),
        ],
      });
    </code-example>

    <code-example header="Router - Context Module - Named Chunks" filename="router/index.js">
      import Vue from 'vue';
      import Router from 'vue-router';

      const Home = () => import('../pages/Home');

      const AsyncRoute = routeName => ({
        path: `/${routeName}`,
        name: routeName,
        component: () => import(/* webpackChunkName: "lazy-route-chunk-[request]" */`@/pages/${routeName}`),
      });

      export default new Router({
        routes: [
          {
            path: '/',
            name: 'Home',
            component: Home,
          },
          ...['Contact', 'Support', 'About', 'webpack'].map(AsyncRoute),
        ],
      });
    </code-example>
  </div>
</template>
<script>export default {};</script>
<style></style>
