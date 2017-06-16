import AsyncComponent from '@/utilities/asyncComponent';
import LoadingComponent from '@/components/Loading';
import ErrorComponent from '@/components/Error';

export default componentName => ({
  // The component to load. Should be a Promise
  component: AsyncComponent(componentName)(),
  // A component to use while the async component is loading
  loading: LoadingComponent,
  // A component to use if the load fails
  error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
