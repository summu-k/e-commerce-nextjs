import { fetchSingleProduct } from '../../../actions/hooks/homePage/userActionHooks';

export default async function fetchSingleProductApi(req, res) {
  const { id } = req.query;
  const productData = await fetchSingleProduct(id);
  res.json(productData.data);
}
