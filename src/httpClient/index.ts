import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_WEB_APP_URL;

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const webAppAxios = axios.create({ ...config, baseURL: baseUrl });

export default webAppAxios;
