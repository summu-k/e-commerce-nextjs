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
  product_url?: string;
  product_name: string;
  product_id?: string;
  listing_price?: number;
  sale_price: number;
  discount?: number;
  brand: string;
  description?: string;
  quantity?: number;
  rating?: number;
  reviews?: number;
  images: Array<string>;
  last_visited?: string;
  total_count?: string;
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

export interface ProductPropsMap {
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
    product_name: string;
    productId: number;
    sale_price: number;
    brand: string;
    images: Array<string>;
  };
};

// export type WishlistFieldProps = {
//   name: string;
//   productId: number;
//   image: string;
//   status: string;
//   species: string;
// };

export type WishlistFieldProps = {
  product_name: string;
  productId: number;
  sale_price: number;
  brand: string;
  images: Array<string>;
};

export type ProductProps = {
  brand: string;
  description: string;
  discount: number;
  id: number;
  images: Array<string>;
  listing_price: number;
  product_id: number;
  product_name: string;
  product_url: string;
  rating: number;
  reviews: number;
  sale_price: number;
};

export interface userProps {
  body: {
    id?: number;
    name: string;
    email: string;
    password: string;
    is_admin?: boolean;
  };
}

export interface productProps {
  id?: number;
  product_name: string;
  brand: string;
  sale_price: number;
  images: Array<string>;
  discount: number;
  rating: number;
}

export interface AuthContextType {
  wishlists: WishlistItemProps[];
  wishlistsCount: number;
  setWishlistsCount(input: number): void;
  setWishlists: (input: WishlistItemProps[]) => void;
  addWishlist: (wishlist: WishlistFieldProps) => void;
  refreshWishlists: () => void;
  deleteWishlist: (id: string) => void;
  fetchWishlist: (id: number) => void;
  state: any;
  dispatch: any;
}

export type WishlistMapType = Record<number, string>;
