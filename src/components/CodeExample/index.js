import LoadingComponent from '@/components/LoadingComponent';
// import ErrorComponent from '@/components/Error';

const FancyAsyncComponent = () => ({
  // The component to load. Should be a Promise
  component: import('@/components/CodeExample/CodeExample.vue'),
  // A component to use while the async component is loading
  loading: LoadingComponent,
  // A component to use if the load fails
  error: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 10,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});

export default function install(Vue) {
  Vue.component('code-example', FancyAsyncComponent);
}
