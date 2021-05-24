import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import user from './modules/user';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'assessmentStore',
  strictMode: true,
  storage: window.localStorage,
  reducer: (state) => {
    return {
      loading: state.loading,
    };
  },
});

const store = new Vuex.Store({
  modules: {
    user,
  },
  state: {
    loading: true,
  },
  mutations: {
    setItem(state, { name, value }) {
      state[name] = value;
    },
  },
  actions: {
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
