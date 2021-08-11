import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductDataProps } from '../utils/interfaces';
import { addToCart } from '../../redux/cartSlice';
import { addNotification } from '../../redux/notificationSlice';
import Button from './actionableButtons/Button';

const ProductInfo = ({ product: { name, gender, species, status }, product }: { product: ProductDataProps }) => {
  const dispatch = useDispatch();
  const setCartItem = () => {
    dispatch(addToCart(product));
    dispatch(addNotification({ message: 'Item has been added successfully', type: 'success' }));

    setTimeout(() => {
      dispatch(addNotification({ message: '', type: '' }));
    }, 10000);
  };

  return (
    <div className="font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">{name}</h1>
      <div className="py-4 space-x-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {gender}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {status}
        </span>
      </div>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        $<span className="text-1xl">{15.99}</span>
      </div>
      <Button
        buttonClass="bg-white-500 w-full hover:bg-gray-800 hover:text-white py-3 text-black font-bold py-2 px-4 border border-black-900 rounded"
        submitFunction={setCartItem}
        buttonText="Add to Cart"
        datatest="addToCart"
      />
    </div>
  );
};

export default ProductInfo;
