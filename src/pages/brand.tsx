import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import CategoryCard from '../component/BrandCard';

const Category: FC = () => (
  <main className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    {/* <div className="small">
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-B44832/Women_CORE_RUNNING_SHOES_LOW_B44832_4.jpg"
        name="CORE / NEO"
      />
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-F34485/Women_CORE_SHOES_LOW_F34485_6.jpg"
        name="ORIGINALS"
      />
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-CL7374/Women_CORE_RUNNING_SHOES_LOW_CL7374_1.jpg"
        name="SPORT PERFORMANCE"
      />
    </div> */}
    <div className="large">
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-B44832/Women_CORE_RUNNING_SHOES_LOW_B44832_4.jpg"
        name="NEO"
      />
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-F34485/Women_CORE_SHOES_LOW_F34485_6.jpg"
        name="ORIGINALS"
      />
      <CategoryCard
        image="https://content.adidas.co.in/static/Product-CL7374/Women_CORE_RUNNING_SHOES_LOW_CL7374_1.jpg"
        name="SPORT PERFORMANCE"
      />
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    pageTitle: 'Category Listing Shop',
  },
});

export default Category;
