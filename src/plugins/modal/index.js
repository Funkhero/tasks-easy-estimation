import ModalComponent, { components } from './components/Index.vue';
import ModalPluginEvents from './events';

export { ModalComponent };

export default {
  install(Vue) {
    Vue.prototype.$modal = new ModalPluginEvents();
  },
  component(name, comp) {
    components[name] = comp;
  },
};
