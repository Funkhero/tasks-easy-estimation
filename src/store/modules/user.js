export default {
  namespace: true,
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
      const response = await axios.get('/profile/external/auth/get');

      commit('setItem', {
        item: 'profile',
        value: response.data,
      });

      return response;
    },
  },
};
