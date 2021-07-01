import fetch from '@/utilities/http/task-api';

export default {
  namespaced: true,
  state: {
    profile: null,
  },
  mutations: {
    setItem(state, { item, value }) {
      state[item] = value;
    },
  },
  actions: {
    async fetchUserProfile({ commit }) {
      const response = await fetch('get', '/profile/external/auth/get');

      commit('setItem', {
        item: 'profile',
        value: response.data,
      });

      return response;
    },
  },
};
