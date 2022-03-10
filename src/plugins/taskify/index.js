import { requireAll, filenameToCamelCase } from '@/utilities';
import clickOutside from './directives/clickOutside';
import './styles/common.scss';

export default {
  install(Vue) {
    requireAll(require.context('./components/', true, /\.(vue|js)$/), (component, name) => {
      Vue.component(filenameToCamelCase(name), component);
    });

    Vue.directive('click-outside', clickOutside);

    Vue.prototype.$taskify = new Vue();
  },
};
