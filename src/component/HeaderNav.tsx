import React from 'react';
import LinkComponent from '../component/actionableButtons/LinkComponent';

export default function HeaderNav() {
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          <LinkComponent
            linkhref="/"
            classname="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkname="Home"
            datatest="Home"
            aria-label="Home Page"
            target="_self"
          />
        </li>
        <li>
          <LinkComponent
            linkhref="/category"
            classname="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkname="Category"
            datatest="category"
            aria-label="Category Page"
            target="_self"
          />
        </li>
        <li>
          <LinkComponent
            linkhref="/shop"
            classname="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkname="Shop"
            datatest="shop"
            aria-label="Product Listing Page"
            target="_self"
          />
        </li>
      </ul>
    </nav>
  );
}
