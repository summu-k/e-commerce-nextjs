import type { NextApiRequest, NextApiResponse } from 'next';
import webAppAxios from '../../../httpClient/index';

export async function fetchSingleProduct(id: string | undefined) {
  const url = `character/${id}`;
  const productData = await webAppAxios.get(url);
  return productData.data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const { productId } = req.query;
    if (typeof productId === 'string') {
      const products = fetchSingleProduct(productId);
      res.status(200).json(products);
    }
  }
}
