import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'assessmentStore',
  strictMode: true,
  storage: window.localStorage,
  reducer: (state) => {
    return {
      assessmentList: state.assessmentList,
    };
  },
});

const store = new Vuex.Store({
  state: {
    assessmentList: [],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  plugins: [vuexLocal.plugin],
});

export default store;
