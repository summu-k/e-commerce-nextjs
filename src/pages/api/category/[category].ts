import type { NextApiRequest, NextApiResponse } from 'next';
import webAppAxios from '../../../httpClient/index';
import data from './data.json';

export function getProductsByCategory(category: string, start: number, limit: number) {
  const products = data.filter((product) => product.category === category);
  return products.slice(start, limit);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const { category, start, limit } = req.query;
    if (typeof category === 'string' && typeof start === 'number' && typeof limit === 'number') {
      const products = getProductsByCategory(category, start, limit);
      res.status(200).json(products);
    }
  }
}

export function getProductCount(cat: string) {
  const products = data.filter((product) => product.category === cat);
  return products.length;
}

export async function getProductByBrands(brand: string, limit: number, offset: number) {
  const productUrl = `products/brands?brand=${brand}&limit=${limit}&offset=${offset}`;
  const allProducts = await webAppAxios.get(productUrl);
  return allProducts.data;
}
