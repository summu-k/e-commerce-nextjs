import versionedWebAppAxios from '../../../axios';


export function fetchSingleProduct(data) {
    const url = `/${data}`;
    return versionedWebAppAxios.get(url)
}