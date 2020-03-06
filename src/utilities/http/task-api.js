import Axios from 'axios';
import http from '.';

const TASK_BASE_API_URL = 'https://task-easy-estimation.ru/api/';

async function fetch(method, url, data, options) {
  try {
    const { CancelToken } = Axios;
    let cancelRequest = null;
    let cancelTimer;
    if (options?.timeout) {
      // отменит запрос, если он будет дольше выполняться
      cancelTimer = setTimeout(() => {
        if (cancelRequest) {
          cancelRequest(`timeout for request exceed ${url}`);
        }
      }, options.timeout);
    }

    const response = await http({
      baseURL: TASK_BASE_API_URL,
      url,
      data,
      method: method || 'get',
      cancelToken: new CancelToken((cancel) => {
        cancelRequest = cancel;
      }),
    });

    if (cancelTimer) {
      clearTimeout(cancelTimer);
    }

    if (!response.data) console.error(response);

    return response.data;
  } catch (error) {
    if (options?.retry) {
      return fetch(method, url, data, { retry: true });
    }
    throw error;
  }
}

export default (method, url, data, options) => fetch(method, url, data, options);
