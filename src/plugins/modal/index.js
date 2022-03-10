import ModalComponent, { components } from './components';
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
