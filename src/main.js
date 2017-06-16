import Vue from 'vue';
import CodeExample from '@/components/CodeExample';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(CodeExample);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
