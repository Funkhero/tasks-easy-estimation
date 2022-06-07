import { getCookie } from '@/utilities';
import { fetchUserProfile } from '@/services';

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
    async fetchUserProfile({ commit }, id) {
      const response = await fetchUserProfile(id);

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
