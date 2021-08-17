/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import Router from 'next/router';
import { isTablet, isDesktop } from 'react-device-detect';
import { useUser } from '@auth0/nextjs-auth0';
import LinkComponent from './actionableButtons/LinkComponent';
import { addToCart } from '../../redux/cartSlice';
import { ProductDataProps, AuthContextType } from '../utils/interfaces';
import { WishlistContext } from '../contexts/WishlistContext';
import HeaderNav from './HeaderNav';
import { addNotification } from '../../redux/notificationSlice';
import Button from '../component/actionableButtons/Button';

import type { RootState, AppDispatch } from '../../redux/store';

const Notification = dynamic(() => import('./Notification'));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type ComponentProps = React.PropsWithChildren<{}>;

const Header = ({ children }: ComponentProps) => {
  const { user } = useUser();
  const { wishlistsCount } = useContext(WishlistContext) as AuthContextType;

  let cartFromLocalStorage: ProductDataProps[] = [];
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state && state.cart);
  const [cartCount, setCartCount] = useState(0);
  const [hideMenu, setHideMenu] = useState(true as boolean);

  const getItemsCount = () =>
    cart.reduce((sum, { quantity }) => sum + quantity, 0) ||
    cartFromLocalStorage.reduce((localSum, localItem) => localSum + (localItem.quantity ? localItem.quantity : 0), 0);

  Router.events.on('routeChangeStart', () => {
    setHideMenu(true);
    setTimeout(() => {
      dispatch(addNotification({ message: '', type: '' }));
    }, 10000);
  });

  React.useEffect(() => {
    const returnUrl = localStorage.getItem('cart');
    if (returnUrl) {
      cartFromLocalStorage = JSON.parse(returnUrl);
    } else {
      cartFromLocalStorage = [];
    }
    cartFromLocalStorage.forEach((cartItem) => {
      dispatch(addToCart(cartItem));
    });
  }, []);

  React.useEffect(() => {
    setCartCount(getItemsCount());
  }, [cart]);

  return (
    <>
      <Notification />
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              onClick={() => setHideMenu(!hideMenu)}
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          {isDesktop || isTablet ? (
            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
              <HeaderNav />
            </div>
          ) : (
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
              style={{ display: hideMenu ? 'none' : 'block' }}
            >
              <HeaderNav />
            </div>
          )}
          <div className="order-1 md:order-2 mr-2">
            <LinkComponent
              linkhref="/"
              classname="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              linkname="NORDICS"
              datatest="Store Front"
              aria-label="Store Front"
              target="_self"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
            </LinkComponent>
          </div>

          <div className="order-2 md:order-3 flex items-center" id="nav-content">
            {!user && <LinkComponent linkhref="/api/auth/login" linkname="Login" />}
            {user && (
              <>
                <LinkComponent linkhref="/api/auth/logout" linkname="Log Out" />
                <div className="ml-3 relative dropdown group">
                  <div>
                    <Button
                      buttonClass="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      buttonId="user-menu-button"
                      datatest="Apply Coupon"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.picture ? user.picture : ''}
                        alt="User Profile"
                      />
                    </Button>
                  </div>
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 dropdown-menu"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <span className="block px-4 py-2 text-sm text-gray-700">{user?.name ? user.name : ''}</span>
                  </div>
                </div>
              </>
            )}
            <LinkComponent
              linkhref="/cart"
              classname="pl-3 inline-block no-underline hover:text-black"
              linkname=""
              datatest="Cart"
              aria-label="Cart"
              target="_self"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
              <span className="absolute top-6 right-50 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartCount}
              </span>
            </LinkComponent>
            <LinkComponent
              linkhref="/wishlist"
              classname="pl-3 inline-block no-underline hover:text-black"
              linkname=""
              datatest="Wishlist"
              aria-label="Wishlist"
              target="_self"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-500 hover:text-red-500  cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
              </svg>
              <span className="absolute top-6 right-50 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {wishlistsCount}
              </span>
            </LinkComponent>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Header;
