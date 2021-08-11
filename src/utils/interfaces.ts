export interface ProductDataProps {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  url: string;
  created: string;
  quantity: number;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string[];
  results: ProductDataProps[];
  category: string;
}

export interface ProductInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ProductProps {
  title: string;
  description: string;
  price: number;
  gender: string;
  status: string;
  type: string;
  products: ProductDataProps;
}

export interface SeoProps {
  pageTitle: string;
}
