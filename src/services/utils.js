import axios from 'axios';

function wrapRequest(func) {
  return async (...args) => {
    const res = await func(...args);
    if (res.status !== 200) {
      throw res;
    } else {
      return res;
    }
  };
}

const xapi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept' : 'application/json'
  }
});

export { wrapRequest, xapi};
