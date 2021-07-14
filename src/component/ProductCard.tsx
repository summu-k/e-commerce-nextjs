import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  let slug = product.name;
  slug = slug.replace(/\s+/g, '-').toLowerCase();

  const setCartItem = () => {
    dispatch(addToCart(product));
  };

  React.useEffect(() => {}, [dispatch]);

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mg-5 mx-8 my-4">
        <Image className="w-full" src={product.image} height={300} width={300} alt="Product images" />
        <div className="px-6 py-4">
          <Link href="/product/[name]/[id]" as={`/product/${slug}/${product.id}`}>
            <a>
              <h1 className="font-bold text-xl mb-2">{product.name}</h1>
            </a>
          </Link>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            {product.status}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
            {product.species}
          </span>
        </div>
        <button
          type="button"
          className="bg-white-500 w-full hover:bg-gray-800 hover:text-white py-3 text-black font-bold py-2 px-4 border border-black-900 rounded"
          onClick={setCartItem}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
