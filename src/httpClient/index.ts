import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_WEB_APP_URL;
const versionedBaseUrl = `${baseUrl}`;

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const versionedWebAppAxios = axios.create({ ...config, baseURL: versionedBaseUrl });

export default versionedWebAppAxios;
