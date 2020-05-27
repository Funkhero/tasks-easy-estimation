import Vue from 'vue';
import App from './App.vue';

import router from './router.js';

export default new Vue({
  el: '#app',
  router,
  name: 'AppRoot',
  render: (h) => h(App),
});
