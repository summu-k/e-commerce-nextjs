import type { NextApiRequest, NextApiResponse } from 'next';
import webAppAxios from '../../../httpClient/index';
import { productProps } from '../../../utils/interfaces';

export async function fetchSingleProduct(id: string | undefined) {
  const url = `products/${id}`;
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

export async function getFilteredProduct(productUrl: string): Promise<Response> {
  const searchResult = await fetch(`${productUrl}`);
  return searchResult;
}

export async function updateProduct(id: string, payload: productProps) {
  const updateUrl = `/api/products/updateProduct/${id}`;
  const updatedProduct = await webAppAxios.post(updateUrl, payload);
  return updatedProduct;
}

export async function uploadProductImage(body: any, payload: any) {
  const updateUrl = '/api/products/uploadSingle';
  const updatedProduct = await webAppAxios.post(updateUrl, body, payload);
  return updatedProduct;
}
