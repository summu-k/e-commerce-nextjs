import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  image: string;
  name: string;
}

const BrandCard: FC<Props> = ({ image, name }) => (
  <div className="card">
    <Image className="image" src={image} height={700} width={1300} />
    {/* <Link href={`/brand/${name.replace(/\s+/g, '-').toLowerCase()}`}> */}
    <Link href={`/search?brand=${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="info" data-test-py="categoryListing">
        <h3>{name}</h3>
        <p>SHOP NOW</p>
      </div>
    </Link>
  </div>
);

export default BrandCard;
