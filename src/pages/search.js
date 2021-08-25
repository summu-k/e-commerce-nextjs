/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Box, Grid, List, ListItem, MenuItem, Select, Typography, Button } from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/ai';
import InfiniteScroll from 'react-infinite-scroll-component';
import { brandMap } from '../utils/commonUtility';
import { getSearchProduct } from './api/category/[category]';

const prices = [
  {
    name: '$1 to $5000',
    value: '1-5000',
  },
  {
    name: '$5001 to $10000',
    value: '5001-10000',
  },
  {
    name: '$10001 to $29999',
    value: '10001-29999',
  },
];

const ProductCardTheme = dynamic(() => import('../component/ProductCardTheme'), {
  loading: () => <p>Loading...</p>,
});

// { products, productCount }: { products: ProductMapProps[]; productCount: number }

function Search({ products, productCount }) {
  const router = useRouter();
  const { query = 'all', brand = 'all', price = 'all', sort = 'featured' } = router.query;
  const [data] = useState(products);
  const [hasMore, setHasMore] = useState(true);

  const filterSearch = ({ page, brand, limit, offset, sort, min, max, searchQuery, price, rating }) => {
    const path = router.pathname;
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (limit) query.limit = limit;
    if (offset) query.offset = offset;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query,
    });
  };

  const pageHandler = (e, page) => {
    console.log('page---- ');
    console.log(page);
    filterSearch({ page });
  };

  //   const getMoreResults = async () => {
  //     const { brand } = router.query;
  //     if (typeof brand === 'string') {
  //       const { results } = await getProductByBrands(brandMap[brand], 20, data.length + 1);
  //       setData((dataPrev: any) => [...dataPrev, ...results]);
  //     }
  //   };

  //   useEffect(() => {
  //     if (products) {
  //       setData(products);
  //     }
  //   }, [products]);

  useEffect(() => {
    if (data) {
      console.log('productCount prev ', productCount);
      console.log('data.length prev ', data.length);
      setHasMore(productCount > data.length);
    }
  }, [data]);

  useEffect(() => {
    console.log('hasMore val ', hasMore);
  }, [hasMore]);

  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value });
  };

  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };

  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };

  return (
    <Grid className="mt1 productListingWrapper mx-auto pt-4 pb-12 container" container spacing={1}>
      <Grid item md={3}>
        <List>
          <ListItem>
            <Box className="w-full">
              <Typography>Brands</Typography>
              <Select value={brand} onChange={brandHandler} fullWidth>
                <MenuItem value="all">All</MenuItem>
                {brandMap &&
                  Object.keys(brandMap).map((brandKey) => (
                    <MenuItem key={brandKey} value={brandKey}>
                      {brandMap[brandKey]}
                    </MenuItem>
                  ))}
              </Select>
            </Box>
          </ListItem>
          <ListItem>
            <Box className="w-full">
              <Typography>Prices</Typography>
              <Select value={price} onChange={priceHandler} fullWidth>
                <MenuItem value="all">All</MenuItem>
                {prices.map((price) => (
                  <MenuItem key={price.value} value={price.value}>
                    {price.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </ListItem>
        </List>
      </Grid>
      <Grid item md={9}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            {products && products.length === 0 ? 'No' : productCount} Results
            {query !== 'all' && query !== '' && ` : ${query}`}
            {brand !== 'all' && ` : ${brand}`}
            {price !== 'all' && ` : Price ${price}`}
            {(query !== 'all' && query !== '') || brand !== 'all' || price !== 'all' ? (
              <Button onClick={() => router.push('/search')}>
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            <Typography component="span" className="mr-2">
              Sort by
            </Typography>
            <Select value={sort} onChange={sortHandler}>
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="lowest">Price: Low to High</MenuItem>
              <MenuItem value="highest">Price: High to Low</MenuItem>
              <MenuItem value="toprated">Customer Reviews</MenuItem>
              <MenuItem value="newest">Newest Arrivals</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <InfiniteScroll
            dataLength={data.length}
            next={pageHandler}
            hasMore={hasMore}
            loader={<h4>loading...</h4>}
            endMessage={
              <div className="cards text-center py-6">
                <p data-test-py="productEnd">
                  <b>Thats all folks !!!</b>
                </p>
              </div>
            }
          >
            <div className="cards flex flex-wrap">
              {data.map((product) => (
                <ProductCardTheme key={product.id} product={product} />
              ))}
            </div>
          </InfiniteScroll>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  const brand = query.brand ? brandMap[query.brand] : '' || '';
  const priceRange = query.price || '';
  const limit = query.limit || 20;
  const offset = query.offset || 0;
  const { results, info } = await getSearchProduct(brand, priceRange, limit, offset);
  return {
    props: {
      products: results,
      productCount: info.count,
      pageTitle: brand.toUpperCase(),
    },
  };
}

// export async function getServerSideProps({ query }) {
//   const pageSize = query.pageSize || 20;
//   const page = query.page || 1;
//   const brand = query.brand || '';
//   const price = query.price || '';
//   const rating = query.rating || '';
//   const sort = query.sort || '';
//   const searchQuery = query.query || '';
// }
