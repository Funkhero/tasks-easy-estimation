import ModalComponent, { components } from './Index.vue';

class ModalPluginMethods {
  _masterComponent;

  open(name, props, listeners) {
    return this._masterComponent.openModal(name, props, listeners);
  }

  close(result) {
    this._masterComponent.close(result);
  }

  set masterComponent(comp) {
    if (window && this._masterComponent) {
      throw new Error('Vue modal plugin: there must only one modal instance');
    }
    this._masterComponent = comp;
  }

  get masterComponent() {
    return this._masterComponent;
  }
}

export { ModalComponent };

export default {
  install(Vue) {
    Vue.prototype.$modal = new ModalPluginMethods();
  },
  component(name, comp) {
    components[name] = comp;
  },
};
