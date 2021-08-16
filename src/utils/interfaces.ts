/* eslint-disable no-unused-vars */
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
  wishlistMap?: WishlistMapType;
  category: string;
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

export interface SeoProps {
  pageTitle: string;
}

export interface WishlistProps {
  initialWislist: [];
}

export type WishlistItemProps = {
  id: string;
  fields: {
    name: string;
    productId: number;
  };
};

export type WishlistFieldProps = {
  name: string;
  productId: number;
  image?: string;
  status?: string;
  species?: string;
};

export interface AuthContextType {
  wishlists: WishlistItemProps[];
  setWishlists: (input: WishlistItemProps[]) => void;
  addWishlist: (wishlist: WishlistFieldProps) => void;
  refreshWishlists: () => void;
  deleteWishlist: (id: string) => void;
  fetchWishlist: (id: number) => void;
}

export type WishlistMapType = Record<number, string>;
