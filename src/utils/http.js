import axios from 'axios';

/**
 * The axios http instance.
 *
 * @type {AxiosInstance}
 */
const http = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
