import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ image, name }) => (
  <div className="card">
    <Image className="image" src={image} height={700} width={1300} />
    <Link href={`/category/${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="info">
        <h3>{name}</h3>
        <p>SHOP NOW</p>
      </div>
    </Link>
  </div>
);

export default CategoryCard;
