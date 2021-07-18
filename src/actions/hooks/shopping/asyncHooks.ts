import { AxiosResponse } from 'axios';
import versionedWebAppAxios from '../../../httpClient';

function fetchAllProduct(): Promise<AxiosResponse> {
  const url = `character/`;
  return versionedWebAppAxios.get(url);
}

export default fetchAllProduct;
