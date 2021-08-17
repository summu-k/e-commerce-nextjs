/* eslint-disable react/require-default-props */
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import LinkComponent from './actionableButtons/LinkComponent';
import { addToCart } from '../../redux/cartSlice';
import { addToCompare, removeFromCompare } from '../../redux/addToCompareSlice';
import { addNotification } from '../../redux/notificationSlice';
import { ProductDataProps, AuthContextType } from '../utils/interfaces';
import Button from '../component/actionableButtons/Button';
import { WishlistContext } from '../contexts/WishlistContext';

const ProductCardTheme = ({
  product: { id, image, name, status, species },
  product,
  checkWishlist,
}: {
  product: ProductDataProps;
  checkWishlist?: boolean;
}) => {
  const { addWishlist, deleteWishlist, wishlistsCount, setWishlistsCount } = useContext(
    WishlistContext
  ) as AuthContextType;
  const dispatch = useDispatch();
  let slug = name;
  slug = slug.replace(/\s+/g, '-').toLowerCase();
  const router = useRouter();
  const [wishlistAdded, setWishlistAdded] = useState<boolean>(false);

  const setCartItem = () => {
    dispatch(addToCart(product));
    dispatch(addNotification({ message: 'Item has been added successfully', type: 'success' }));
  };

  const handleAddToCompare = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addToCompare({ products: product }));
    } else {
      dispatch(removeFromCompare({ products: product }));
    }
  };

  const addRemoveWishlistProduct = async () => {
    const usp = new URLSearchParams();
    usp.set('id', `${id}`);
    const singleWishlistUrl = '/api/getOneWishlist';
    const res = await fetch(`${singleWishlistUrl}?${usp.toString()}`);
    const singleWishlist = await res.json();
    if (singleWishlist && singleWishlist.length > 0) {
      deleteWishlist(singleWishlist[0].id);
      setWishlistAdded(false);
    } else {
      setWishlistsCount(wishlistsCount + 1);
      addWishlist({ productId: id, image, name, status, species });
      setWishlistAdded(true);
    }
  };

  useEffect(() => {
    if (checkWishlist) {
      setWishlistAdded(checkWishlist);
    }
  }, [checkWishlist]);

  const path = router.pathname;

  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col product-information">
        <LinkComponent
          linkhref={`/product/${slug}/${id}`}
          classname=""
          linkname=""
          datatest="Catalog Image"
          aria-label="Catalog Image"
          target="_self"
        >
          <Image
            data-test-py="categoryProducts"
            className="hover:grow hover:shadow-lg"
            src={image}
            height={300}
            width={300}
            alt="Product images"
          />
        </LinkComponent>
        <div className="pt-3 flex items-center justify-between">
          <LinkComponent
            linkhref={`/product/${slug}/${id}`}
            classname="w-full"
            linkname=""
            datatest="Product Name"
            aria-label="Product Name"
            target="_self"
          >
            <h1 className="font-bold text-xl mb-2">{name}</h1>
          </LinkComponent>
          <svg
            className={`h-6 w-6 fill-current text-gray-500 hover:text-red-500  cursor-pointer ${
              wishlistAdded ? 'text-red-500' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => addRemoveWishlistProduct()}
          >
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          </svg>
        </div>
        <p className="pt-1 text-gray-900">$9.99</p>
        <div className="py-4 space-x-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            {status}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            {species}
          </span>
        </div>
        {path === '/shop' && (
          <label className="custom-control">
            <input
              id={`custom-checkbox-${id}`}
              name={`compare-${name}`}
              type="checkbox"
              value={id}
              onChange={handleAddToCompare}
              className="custom-control-input"
            />
            <div className="custom-control-label"> Add to Compare </div>
          </label>
        )}
        <Button
          buttonClass="bg-white-500 w-full hover:bg-gray-800 hover:text-white py-3 text-black font-bold py-2 px-4 border border-black-900 rounded"
          submitFunction={setCartItem}
          buttonText="Add to Cart"
          datatest="addToCart"
        />
      </div>
    </>
  );
};

export default ProductCardTheme;
