import React, { createContext, useState } from 'react';
import { WishlistItemProps, WishlistFieldProps } from '../utils/interfaces';

const WishlistContext = createContext({});
type ComponentProps = React.PropsWithChildren<{}>;

const WishlistProvider = ({ children }: ComponentProps) => {
  const [wishlists, setWishlists] = useState<WishlistItemProps[]>([]);

  const refreshWishlists = async () => {
    try {
      const res = await fetch('/api/getWishlists');
      const latestTodos = await res.json();
      setWishlists(latestTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const addWishlist = async (wishlist: WishlistFieldProps) => {
    try {
      const res = await fetch('/api/createWishlist', {
        method: 'POST',
        body: JSON.stringify({ name: wishlist.name, productId: wishlist.productId }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newWishlist = await res.json();
      setWishlists((prevTodos) => {
        const updatedTodos = [newWishlist, ...prevTodos];
        return updatedTodos;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWishlist = async (id: string) => {
    try {
      await fetch('/api/deleteTodo', {
        method: 'Delete',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });

      setWishlists((prevWishlists) => prevWishlists.filter((wishlist) => wishlist.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlists, setWishlists, refreshWishlists, deleteWishlist, addWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
