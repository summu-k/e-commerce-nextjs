import React from 'react';
import { GetServerSideProps } from 'next';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { CartProductInfo, CartOrderSummary } from '../component/cart';

import type { RootState, AppDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      {cart.length === 0 ? (
        <span className="text-gray-800 text-xl text-center pt-4">
          <h1>Your Cart is Empty!</h1>
        </span>
      ) : (
        <>
          <div>
            <div className="py-12">
              <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                <div className="md:flex ">
                  <div className="w-full p-4 px-5 py-5">
                    <div className="md:grid md:grid-cols-3 gap-2 ">
                      <CartProductInfo cart={cart} />
                      <CartOrderSummary />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    pageTitle: 'Shop Forever Cart Page',
  },
});

export default CartPage;
