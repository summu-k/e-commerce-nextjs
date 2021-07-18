import { AxiosResponse } from 'axios';
import versionedWebAppAxios from '../../../httpClient';

function fetchSingleProduct(data: any): Promise<AxiosResponse<any>> {
  const url = `character/${data}`;
  return versionedWebAppAxios.get(url);
}

export default fetchSingleProduct;
