import Vue from 'vue';
import App from './App.vue';

import Modal from './plugins/modal';

import './styles/base.scss';

import router from './router.js';
import store from './store';

Vue.use(Modal);

export default new Vue({
  el: '#app',
  name: 'AppRoot',
  router,
  store,
  render: (h) => h(App),
});
