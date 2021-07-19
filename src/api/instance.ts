import axios from 'axios';
import { config_variables } from '../config/variables';

const $api = axios.create({
  baseURL: config_variables.BACKEND_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': config_variables.BACKEND_URL,
  },
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get(`${config_variables.BACKEND_URL}/refresh`, {
          withCredentials: true,
        });

        localStorage.setItem('token', response.data.accessToken);

        $api.request(originalRequest);
      } catch (error) {
        console.log('NOT AUTHORIZED');
      }
    }

    throw error;
  },
);

export default $api;
