import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});
