import Axios from 'axios';
import { getToken } from 'timos-accounts/dist/jwt-helper';

const axios = Axios.create({
  headers: {
    Authorization: `Bearer ${getToken()}`
  },
  baseURL: 'https://api.timos.design/'
});
export default axios;
