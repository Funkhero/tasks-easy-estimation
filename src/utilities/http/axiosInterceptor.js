import axios from 'axios';
import { setCookie, deleteCookie } from '@/utilities';

export default (store) => {
  axios.interceptors.request.use((config) => {
    if (store.state.auth.accessToken) {
      console.log(123);
    }
    return config;
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  });

  axios.interceptors.response.use((response) => {
    if (response.data.access_token) {
      const accessToken = response.data.access_token;
      store.commit('auth/setItem', { item: 'accessToken', value: accessToken });
      setCookie('USER_TOKEN', accessToken);
    }
    return response;
  }, (error) => {
    if (error.response && error.response.status === 401) {
      store.commit('auth/setItem', { item: 'accessToken', value: null });
      deleteCookie('USER_TOKEN');
    }
    return Promise.reject(error);
  });
};
