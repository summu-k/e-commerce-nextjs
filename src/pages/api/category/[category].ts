import data from './data.json';

export function getProductsByCategory(category: string, start: number, limit: number) {
  const products = data.filter((product) => product.category === category);
  return products.slice(start, limit);
}

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category, req.query.start, req.query.limit);
    res.status(200).json(products);
  }
}

export function getProductCount(cat: string) {
  const products = data.filter((product) => product.category === cat);
  return products.length;
}
