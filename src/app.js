import Vue from 'vue';
import App from '@/App.vue';

import Modal from '@/plugins/modal';
import Taskify from '@/plugins/taskify';

import '@/styles/base.scss';
import { filenameToCamelCase, requireAll } from '@/utilities';

import router from '@/router';
import store from '@/store';

requireAll(require.context('@/components/modals/', true, /\.(vue|js)$/), (component, name) => {
  Modal.component(filenameToCamelCase(name), component);
});

Vue.use(Modal);
Vue.use(Taskify);

export default new Vue({
  el: '#app',
  name: 'AppRoot',
  router,
  store,
  render: (h) => h(App),
});
