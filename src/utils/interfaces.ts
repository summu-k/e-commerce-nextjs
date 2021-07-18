export interface ProductI {
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
  results: ProductI[];
  category: string;
}
