import Vue from 'vue';
import App from './App.vue';

import router from './router.js';
import store from './store';

export default new Vue({
  el: '#app',
  name: 'AppRoot',
  router,
  store,
  render: (h) => h(App),
});
