import fetch from '@/utilities/http/task-api';
import { getCookie } from '@/utilities';

export default {
  namespaced: true,
  state: {
    accessToken: getCookie('USER_TOKEN') || null,
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
  getters: {
    authUser(state) {
      if (state.accessToken) {
        // TODO decoded from state.accessToken
        const decoded = { user: state.accessToken };
        return decoded.user || { role: 'guest' };
      }

      return { role: 'guest' };
    },
  },
};
