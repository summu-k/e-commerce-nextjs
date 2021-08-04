/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FC } from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import ReactPaginate from 'react-paginate';
import { ProductDataProps, ProductDataPropsnfo } from '../utils/interfaces';
import CardSkeleton from '../component/Skeleton';
import { fetchAllProduct } from '../pages/api/product';
import { getQueryString, apiQueryInterface } from '../utils/commonUtility';

// const Loader = dynamic(() => import('../component/Loader'));
const ProductCardTheme = dynamic(() => import('../component/ProductCardTheme'));

type ProductListingProps = {
  results: ProductDataProps[];
  info: ProductDataPropsnfo;
};

// export default function ProductListing({ results, info }: { results: ProductDataProps[]; info: ProductDataPropsnfo }) {
const ProductListing: FC<ProductListingProps> = ({ results, info }) => {
  const [productList, setProductList] = useState<Object[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<ProductDataProps[]>();
  const usersPerPage = 20;

  React.useEffect(() => {
    setProductData(results);
  }, [results]);

  React.useEffect(() => {
    if (productData) {
      const productListData = productData.map((data: ProductDataProps) => (
        <ProductCardTheme key={data.id} product={data} />
      ));
      setProductList(productListData);
    }
  }, [productData]);

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
    // setLoading(false);
  };

  const mobileChangePage = (e: React.MouseEvent<HTMLButtonElement>, pgNum: number) => {
    e.preventDefault();
    if (pgNum !== 0) {
      // setLoading(false);
      setPageNumber(pgNum);
    }
  };

  const getMorePaginatedProducts = async (pageNo: number) => {
    const usp = new URLSearchParams();
    usp.set('page', `${pageNo}`);
    const productListUrl = `${process.env.NEXT_PUBLIC_WEB_APP_URL}character`;
    const searchResult = await fetch(`${productListUrl}?${usp.toString()}`);
    const res: { results: []; info: apiQueryInterface } = await searchResult.json();
    setProductData(res.results);
    if (res.info.next) {
      setNext(getQueryString(res.info.next));
    }
    if (res.info.prev) {
      setPrev(getQueryString(res.info.prev));
    }

    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
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
      <div className="productListingWrapper mx-auto pt-4 pb-12 container">
        <div className="flex items-center flex-wrap">{loading ? <CardSkeleton /> : productList}</div>
      </div>
      <div className="my-0 mx-auto w-1/2 sm:hidden">
        {(prev || next) && (
          <>
            <button
              type="button"
              custom-attr={prev}
              onClick={(e) => mobileChangePage(e, prev)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                prev === 0 ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              Previous
            </button>
            <button
              type="button"
              custom-attr={next}
              onClick={(e) => mobileChangePage(e, next)}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                next === 0 ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              Next
            </button>
          </>
        )}
      </div>
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

export const getStaticProps: GetStaticProps = async () => {
  // const { data: productListing } = await fetchAllProduct();
  const { results, info } = await fetchAllProduct();
  // const { results, info } = productListing;
  return {
    props: {
      results,
      info,
      pageTitle: 'Product Listing Shop',
    },
  };
};

export default ProductListing;
