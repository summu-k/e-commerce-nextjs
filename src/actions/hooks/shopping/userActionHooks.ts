import versionedWebAppAxios from '../../../httpClient';

export function fetchSingleProduct(data) {
  const url = `/${data}`;
  return versionedWebAppAxios.get(url);
}

export default fetchSingleProduct;
