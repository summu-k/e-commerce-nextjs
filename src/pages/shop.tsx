import React from 'react';
import { GetStaticProps } from 'next';
import CategoryCard from '../component/CategoryCard';

export default function Shop() {
  return (
    <main className="container">
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
}

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}location`;
  let searchResult = await fetch(url);
  searchResult = await searchResult.json();
  return {
    props: {
      category: searchResult,
    },
  };
};
