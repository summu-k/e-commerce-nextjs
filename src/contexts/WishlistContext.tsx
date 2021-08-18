import React, { createContext, useState, FC } from 'react';
import { WishlistItemProps, WishlistFieldProps } from '../utils/interfaces';

const WishlistContext = createContext({});
type ComponentProps = React.PropsWithChildren<{}>;

const WishlistProvider: FC<ComponentProps> = ({ children }) => {
  const [wishlists, setWishlists] = useState<WishlistItemProps[]>([]);
  const [wishlistsCount, setWishlistsCount] = useState<number>(0);

  const refreshWishlists = async () => {
    try {
      const res = await fetch('/api/getWishlists');
      const latestWishlists = await res.json();
      setWishlists(latestWishlists);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWishlist = async (id: number) => {
    try {
      const res = await fetch('/api/getOneWishlist', {
        method: 'GET',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });
      const wishlist = await res.json();

      setWishlists(wishlist);
    } catch (err) {
      console.error(err);
    }
  };

  const addWishlist = async (wishlist: WishlistFieldProps) => {
    try {
      const res = await fetch('/api/createWishlist', {
        method: 'POST',
        body: JSON.stringify({
          name: wishlist.name,
          productId: wishlist.productId,
          image: wishlist.image,
          status: wishlist.status,
          species: wishlist.species,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newWishlist = await res.json();
      setWishlists((prevWishlists) => {
        const updatedWishlists = [newWishlist, ...prevWishlists];
        return updatedWishlists;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWishlist = async (id: string) => {
    try {
      await fetch('/api/deleteWishlist', {
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
    <WishlistContext.Provider
      value={{
        wishlists,
        setWishlists,
        wishlistsCount,
        setWishlistsCount,
        refreshWishlists,
        fetchWishlist,
        deleteWishlist,
        addWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
