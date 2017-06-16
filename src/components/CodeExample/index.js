import AsyncComponent from '@/utilities/asyncComponent';

export default function install(Vue) {
  Vue.component('code-example', AsyncComponent('CodeExample'));
}
