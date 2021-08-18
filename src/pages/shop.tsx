/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FC, useContext } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import { getSession } from '@auth0/nextjs-auth0';
import { table, minifyRecords } from './api/utils/airtable';
import Button from '../component/actionableButtons/Button';
import {
  ProductDataProps,
  ProductInfo,
  WishlistItemProps,
  WishlistMapType,
  AuthContextType,
} from '../utils/interfaces';
import CardSkeleton from '../component/Skeleton';
import { getAllFilterProduct } from '../pages/api/product';
import { getQueryString } from '../utils/commonUtility';
import filterSearch from '../utils/filterSearch';
import FilterComponent from '../component/FilterComponent';
import SlideOver from '../component/SlideOver';
import { WishlistContext } from '../contexts/WishlistContext';

const ProductCardTheme = dynamic(() => import('../component/ProductCardTheme'));

type ProductListingProps = {
  results: ProductDataProps[];
  info: ProductInfo;
  wishlistMap?: WishlistMapType;
  wishlistCount?: number;
  query: { species: string; gender: string; status: string };
};

const ProductListing: FC<ProductListingProps> = ({ results, info, wishlistMap, wishlistCount, query }) => {
  const [productList, setProductList] = useState<Object[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<ProductDataProps[]>();
  const router = useRouter();
  const usersPerPage = 20;
  const { setWishlistsCount } = useContext(WishlistContext) as AuthContextType;

  React.useEffect(() => {
    setProductData(results);
  }, [results]);

  React.useEffect(() => {
    if (productData && wishlistMap) {
      const productListData = productData.map((data: ProductDataProps) => (
        <ProductCardTheme key={data.id} product={data} checkWishlist={!!wishlistMap[data.id]} />
      ));
      setProductList(productListData);
    }
  }, [productData]);

  React.useEffect(() => {
    if (wishlistCount) {
      setWishlistsCount(wishlistCount);
    }
  }, [wishlistCount]);

  React.useEffect(() => {
    if (productList && productList.length > 0) {
      setLoading(false);
    }
  }, [productList]);

  React.useEffect(() => {
    if (info) {
      if (info.next) {
        setNext(getQueryString(info.next));
      }
      if (info.prev) {
        setPrev(getQueryString(info.prev));
      }
      setPageCount(Math.ceil(info.count / usersPerPage));
    }
  }, [info]);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected + 1);
  };

  const mobileChangePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pgNum: number) => {
    e.preventDefault();
    if (pgNum !== 0) {
      setPageNumber(pgNum);
    }
  };

  const getMorePaginatedProducts = async (pageNo: number) => {
    filterSearch({ router, page: pageNo });
  };

  React.useEffect(() => {
    if (pageNumber) {
      getMorePaginatedProducts(pageNumber);
      setLoading(true);
      window.scrollTo(0, 0);
    }
  }, [pageNumber]);

  return (
    <>
      <FilterComponent />
      {Object.keys(query).length > 1 && (
        <>
          <div className="productListingWrapper mx-auto container">
            Applied filters
            <span className={'filterTags'}>{query.species}</span>
            <span className={'filterTags'}>{query.status}</span>
            <span className={'filterTags'}>{query.gender}</span>
          </div>
        </>
      )}

      <div className="productListingWrapper mx-auto pt-4 pb-12 container">
        <div className="flex items-center flex-wrap">{loading ? <CardSkeleton /> : productList}</div>
      </div>
      <div className="my-0 mx-auto w-1/2 sm:hidden">
        {(prev || next) && (
          <>
            <Button
              buttonClass={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                prev === 0 ? 'cursor-default' : 'cursor-pointer'
              }`}
              submitFunction={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => mobileChangePage(e, prev)}
              buttonText="Previous"
              datatest="Previous button"
            />
            <Button
              buttonClass={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                next === 0 ? 'cursor-default' : 'cursor-pointer'
              }`}
              submitFunction={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => mobileChangePage(e, next)}
              buttonText="Next"
              datatest="Next button"
            />
          </>
        )}
      </div>
      <SlideOver />
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between pagination justify-content-center">
        <div className="max-w-full flex-wrap">
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={changePage}
            containerClassName="pagination justify-content-center"
            pageClassName="page-navigation"
            activeClassName="pagination-active"
            pageLinkClassName="bg-white border-gray-300 text-gray-500 cursor-pointer hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            previousLinkClassName="previousBtn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50"
            nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50"
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const page = query.page || 1;
  const species = query.species || '';
  const gender = query.gender || '';
  const status = query.status || '';
  const { results, info } = await getAllFilterProduct(
    `character?page=${page}&species=${species}&gender=${gender}&status=${status}`
  );
  const session = getSession(context.req, context.res);
  const allWislist = await table.select({ filterByFormula: `userId = '${session?.user?.sub}'` }).firstPage();

  const wishlistMap: WishlistMapType = {};
  minifyRecords(allWislist).forEach((data: WishlistItemProps) => {
    wishlistMap[data.fields.productId] = data.id;
  });

  return {
    props: {
      results,
      info,
      query,
      wishlistMap,
      wishlistCount: allWislist.length,
      pageTitle: 'Product Listing Shop',
    },
  };
};

export default ProductListing;
