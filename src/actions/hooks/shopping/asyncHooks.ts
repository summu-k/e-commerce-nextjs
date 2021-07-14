import versionedWebAppAxios from '../../../httpClient';

export function fetchAllProduct() {
  const url = `character/`;
  return versionedWebAppAxios.get(url);
}

export default fetchAllProduct;
