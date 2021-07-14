import { fetchSingleProduct } from '../../../actions/hooks/shopping/userActionHooks';

export default async function fetchSingleProductApi(req, res) {
  const { id } = req.query;
  const productData = await fetchSingleProduct(id);
  res.status(200).json(productData.data);
}
