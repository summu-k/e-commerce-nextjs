import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from '../../../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

let cartFromLocalStorage = [];
const BaseLayout = ({ children }) => {
  const cart = useAppSelector((state) => state && state.cart);
  const [cartCount, setCartCount] = useState(0);

  const getItemsCount = () =>
    cart.reduce(
      (sum, item) => sum + item.quantity,
      cartFromLocalStorage.reduce((localSum, localItem) => localSum + localItem.quantity, 0)
    );

  React.useEffect(() => {
    cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(getItemsCount());
  }, []);

  return (
    <>
      <nav className="bg-gray-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a>
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                      alt="Shopify"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                      alt="Shopify"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <a className="active:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  </Link>

                  <Link href="/shop">
                    <a className="active:bg-gray-900 text-gray-300 active hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Shop By Category
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative dropdown group">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link href="/">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">
                      Your Profile
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">
                      Settings
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">
                      Sign out
                    </a>
                  </Link>
                </div>
              </div>

              <button
                type="button"
                className="bg-gray-800 ml-2 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <svg className="flex-1 w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute top-4 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
};

export default BaseLayout;
