import React from 'react';
import LinkComponent from '../component/actionableButtons/LinkComponent';

export default function HeaderNav() {
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          <LinkComponent
            linkHref="/"
            anchorClassName="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkName="Home"
            dataTest="Home"
            ariaLabel="Home Page"
            target="_self"
          />
        </li>
        <li>
          <LinkComponent
            linkHref="/category"
            anchorClassName="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkName="Category"
            dataTest="category"
            ariaLabel="Category Page"
            target="_self"
          />
        </li>
        <li>
          <LinkComponent
            linkHref="/shop"
            anchorClassName="inline-block no-underline hover:text-black hover:underline py-2 px-4"
            linkName="Shop"
            dataTest="shop"
            ariaLabel="Product Listing Page"
            target="_self"
          />
        </li>
      </ul>
    </nav>
  );
}
