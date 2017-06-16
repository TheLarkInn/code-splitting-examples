export default routeName => ({
  path: `/${routeName}`,
  name: routeName,
  component: () => import(/* webpackChunkName: "lazy-route-chunk-[request]" */ `@/pages/${routeName}`),
});
