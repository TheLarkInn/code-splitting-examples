import AsyncComponent from '@/utilities/';

export default function install(Vue) {
  Vue.component('code-example', AsyncComponent('CodeExample'));
}
