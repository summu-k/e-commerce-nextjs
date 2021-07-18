import data from './data.json';

export function getProductsByCategory(category: string) {
  // const products = data.filter((product: ProductI) => product.category === category);
  const products = data.map((product) => {
    if (product.category === category) {
      return product;
    }
    return undefined;
  });
  return products;
}

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
