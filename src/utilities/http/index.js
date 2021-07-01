/* eslint-disable quote-props */
import Axios from 'axios';

const http = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
});

export default http;
