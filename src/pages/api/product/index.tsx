import type { NextApiRequest, NextApiResponse } from 'next';
import versionedWebAppAxios from '../../../httpClient/index';

export async function fetchAllProduct() {
  const url = `character/`;
  const allProducts = await versionedWebAppAxios.get(url);
  return allProducts.data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = fetchAllProduct();
    res.status(200).json(products);
  }
}
