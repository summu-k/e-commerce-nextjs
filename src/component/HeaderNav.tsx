import React from 'react';
import Link from 'next/link';

export default function HeaderNav() {
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          <Link href="/">
            <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/category">
            <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">Category</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">Shop</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
