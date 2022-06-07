import { setCookie, deleteCookie } from '@/utilities';
import http from '.';

export default (store) => {
  http.interceptors.request.use((config) => {
    if (store.state.auth?.accessToken) {
      // nothing here
    }
    return config;
  }, (error) => {
    console.log('interceptors request error', error);
    return Promise.reject(error);
  });

  http.interceptors.response.use((response) => {
    if (response.data.access_token) {
      const accessToken = response.data.access_token;
      store.commit('user/setItem', { item: 'accessToken', value: accessToken });
      setCookie('USER_TOKEN', accessToken);
    }
    return response;
  }, (error) => {
    console.log('interceptors response error', error);
    if (error.response && error.response.status === 401) {
      store.commit('user/setItem', { item: 'accessToken', value: null });
      deleteCookie('USER_TOKEN');
    }
    return Promise.reject(error);
  });
};
