import { AxiosResponse } from 'axios';
import versionedWebAppAxios from '../../../httpClient';

export function fetchSingleProduct(data: any): Promise<AxiosResponse<any>> {
  const url = `character/${data}`;
  return versionedWebAppAxios.get(url);
}

export function fetchPagingProduct(params: string): Promise<AxiosResponse<any>> {
  const url = `character?${params}`;
  return versionedWebAppAxios.get(url);
}
