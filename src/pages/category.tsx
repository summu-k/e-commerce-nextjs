import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import CategoryCard from '../component/CategoryCard';

const Category: FC = () => (
  <main className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div className="small">
      <CategoryCard image="https://rickandmortyapi.com/api/character/avatar/20.jpeg" name="Planet" />
      <CategoryCard image="https://rickandmortyapi.com/api/character/avatar/54.jpeg" name="Cluster" />
      <CategoryCard image="https://rickandmortyapi.com/api/character/avatar/184.jpeg" name="Space station" />
    </div>
    <div className="large">
      <CategoryCard image="https://rickandmortyapi.com/api/character/avatar/458.jpeg" name="Microverse" />
      <CategoryCard image="https://rickandmortyapi.com/api/character/avatar/406.jpeg" name="TV" />
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    pageTitle: 'Category Listing Shop',
  },
});

export default Category;
