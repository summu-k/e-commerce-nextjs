import React from 'react';
import Image from 'next/image';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../redux/cartSlice';
import type { RootState, AppDispatch } from '../../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <table className="shadow-lg bg-white">
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">Image</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Product Name</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Quantity</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Actions</th>
            </tr>
            {cart.map((item) => (
              <tr>
                <td className="border px-8 py-4">
                  <Image src={item.image} height="90" width="65" />
                </td>
                <td className="border px-8 py-4">{item.name}</td>
                <td className="border px-8 py-4">{item.quantity}</td>
                <td className="border px-8 py-4">
                  {' '}
                  <button
                    type="button"
                    className="w-7 h-6 bg-black text-white"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="w-7 h-6 bg-black text-white ml-2"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </>
  );
};

export default CartPage;
