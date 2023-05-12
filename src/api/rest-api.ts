import axios from 'axios';

import { baseURL } from '../constants';

const restApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { restApi };