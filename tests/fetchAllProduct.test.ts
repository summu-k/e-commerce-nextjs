import { expect } from '@jest/globals';
import axios from 'axios';

const DEBUG = true;

const customRequest = async (url: string) => {
  const axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (DEBUG) {
        console.info('Request called', config);
      }
      return config;
    },
    (error) => {
      if (DEBUG) {
        console.error('Request error ', error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance.get(url);
};

// axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Check we get all products for page one for product page', () => {
  test('Check if we have any products for page one', async () => {
    const { data } = await customRequest('character/');
    const { results, info } = data;
    expect(results.length > 0).toBeTruthy();
    expect(info.prev).toEqual(null);
  });
});
