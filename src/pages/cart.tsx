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
                      <div className="col-span-2 p-5">
                        <h1 className="text-xl font-medium">Shopping Cart</h1>
                        {cart.map((item) => {
                          const { id, image, quantity, name, species } = item;
                          return (
                            <div className="flex justify-between items-center mt-6 pt-6" key={id}>
                              <div className="flex items-center">
                                {' '}
                                <Image src={image} className="rounded-full" height="90" width="65" />
                                <div className="flex flex-col ml-3">
                                  {' '}
                                  <span className="md:text-md font-medium">{name}</span>{' '}
                                  <span className="text-xs font-light text-gray-400">{species}</span>{' '}
                                </div>
                              </div>
                              <div className="xl:flex md:flex justify-center items-center">
                                <div className="xl:pr-8 md:pr-8 pb-4 xl:pb-0 md:pb-0 xl:inline-block xl:no-underline xl:hover:text-black md:inline-block md:no-underline md:hover:text-black">
                                  <svg
                                    className="fill-current text-gray-600 w-3 custom-svg"
                                    viewBox="0 0 448 512"
                                    onClick={() => dispatch(decrementQuantity(id))}
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                  <input
                                    type="text"
                                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                    value={quantity}
                                  />{' '}
                                  <svg
                                    className="fill-current text-gray-600 w-3 custom-svg"
                                    viewBox="0 0 448 512"
                                    onClick={() => dispatch(incrementQuantity(id))}
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </div>
                                <div className="pr-8 ">
                                  {' '}
                                  <span className="text-xs font-medium">$10.50</span>{' '}
                                </div>
                                <div>
                                  {' '}
                                  <i className="fa fa-close text-xs font-medium" />{' '}
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                          <div className="flex items-center">
                            <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                              Continue Shopping
                            </a>
                          </div>
                          <div className="flex justify-center items-end">
                            {' '}
                            <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>{' '}
                            <span className="text-sm font-bold text-gray-800 "> $24.90</span>{' '}
                          </div>
                        </div>
                      </div>
                      <div className=" p-5 bg-gray-800 rounded overflow-visible">
                        {' '}
                        <span className="text-xl font-medium text-gray-100 block pb-3">Order Summary</span>{' '}
                        <div className="flex justify-between mt-10 mb-5">
                          <span className="text-xs text-gray-400 uppercase">Items 3</span>
                          <span className="text-xs text-gray-400">590$</span>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="text-xs text-gray-400 font-medium inline-block mb-3 text-sm uppercase"
                          >
                            Shipping
                          </label>
                          <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                          </select>
                        </div>
                        <div className="py-10">
                          <label
                            htmlFor="promo"
                            className="text-xs text-gray-400 font-semibold inline-block mb-3 text-sm uppercase"
                          >
                            Promo Code
                          </label>
                          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button
                          type="button"
                          className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                        >
                          Apply
                        </button>
                        <div className="border-t mt-8">
                          <div className="flex font-semibold text-xs text-gray-400 justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                          </div>
                          <button
                            type="button"
                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
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

export default CartPage;
