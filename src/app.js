import Vue from 'vue';
import App from '@/App.vue';

import Modal from '@/plugins/modal';
import Taskify from '@/plugins/taskify';

import '@/styles/base.scss';
import { filenameToCamelCase, requireAll } from '@/utilities';

import router from '@/router';
import store from '@/store';

import sprite from '../assets/sprite.svg';

const div = document.createElement('div');
div.style.display = 'none';
div.innerHTML = sprite;
if (document.body.childNodes && document.body.childNodes.length) document.body.insertBefore(div, document.body.childNodes[0]);

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
