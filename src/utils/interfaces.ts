/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
export interface ProductDataProps {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  url?: string;
  created?: string;
  quantity?: number;
  origin?: { name: string; url: string };
  location?: { name: string; url: string };
  episode?: string[];
  results?: ProductDataProps[];
  wishlistMap?: WishlistMapType;
  wishlistCount?: number;
  category?: string;
  checkWishlist?: boolean;
}

export interface ProductMapProps {
  id: number;
  product_url: string;
  product_name: string;
  product_id: string;
  listing_price: number;
  sale_price: number;
  discount: number;
  brand: string;
  description: string;
  quantity?: number;
  rating?: number;
  reviews?: number;
  images: Array<string>;
  last_visited?: string;
  total_count: string;
  results?: ProductMapProps[];
  wishlistMap?: WishlistMapType;
  wishlistCount?: number;
  category?: string;
  checkWishlist?: boolean;
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

export interface ProductPropsMap {
  title: string;
  description: string;
  price: number;
  gender: string;
  status: string;
  type: string;
  products: ProductMapProps;
}

export interface SeoProps {
  pageTitle: string;
}

export interface WishlistProps {
  initialWislist: [];
  wishlistMap?: WishlistMapType;
}

export type WishlistItemProps = {
  id: string;
  fields: {
    name: string;
    productId: number;
    image: string;
    status: string;
    species: string;
  };
};

export type WishlistFieldProps = {
  name: string;
  productId: number;
  image: string;
  status: string;
  species: string;
};

export type WishlistFieldNewProps = {
  product_name: string;
  productId: number;
  sale_price: number;
  brand: string;
  image: Array<string>;
};

export interface AuthContextType {
  wishlists: WishlistItemProps[];
  wishlistsCount: number;
  setWishlistsCount(input: number): void;
  setWishlists: (input: WishlistItemProps[]) => void;
  addWishlist: (wishlist: WishlistFieldNewProps) => void;
  refreshWishlists: () => void;
  deleteWishlist: (id: string) => void;
  fetchWishlist: (id: number) => void;
}

export type WishlistMapType = Record<number, string>;
