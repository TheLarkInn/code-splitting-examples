const AsyncComponent = componentName => () => import(`@/components/${componentName}/`);

export default AsyncComponent;
