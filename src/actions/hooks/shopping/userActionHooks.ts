import versionedWebAppAxios from '../../../httpClient';

export function fetchSingleProduct(data) {
  const url = `character/${data}`;
  return versionedWebAppAxios.get(url);
}

export default fetchSingleProduct;
