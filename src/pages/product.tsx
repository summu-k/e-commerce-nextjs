import Link from 'next/link';

const Product = () => {
  return (
    <div>
      <h1> Product Page </h1>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </div>
  );
};

export default Product;
