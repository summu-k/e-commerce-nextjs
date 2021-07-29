/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import ReactPaginate from 'react-paginate';
import ProductCardTheme from '../component/ProductCardTheme';
import { ProductI, ProductInfo } from '../utils/interfaces';
import fetchAllProduct from '../actions/hooks/shopping/asyncHooks';
import { getQueryString, apiQueryInterface } from '../utils/commonUtility';
import Loading from '../component/Loader';

export default function Home({ results, info }: { results: ProductI[]; info: ProductInfo }) {
  const [productList, setProductList] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(0 as number);
  const [next, setNext] = useState(0 as number);
  const [prev, setPrev] = useState(0 as number);
  const [loading, setLoading] = useState(false as boolean);
  const [productData, setProductData] = useState<ProductI[]>();
  const usersPerPage = 20;

  React.useEffect(() => {
    setProductData(results);
  }, [results]);

  React.useEffect(() => {
    if (productData) {
      const productListData = productData.map((data: ProductI) => (
        <>
          <ProductCardTheme key={data.id} product={data} />
        </>
      ));
      setProductList(productListData);
    }
  }, [productData]);

  React.useEffect(() => {
    if (info.next) {
      setNext(getQueryString(info.next));
    }
    if (info.prev) {
      setPrev(getQueryString(info.prev));
    }
  }, [info]);

  const pageCount = Math.ceil(info.count / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected + 1);
    setLoading(true);
  };

  const mobileChangePage = (e: any, pgNum: number) => {
    e.preventDefault();
    setLoading(true);
    setPageNumber(pgNum);
  };

  const getMorePaginatedProducts = async (pageNo: number) => {
    const usp = new URLSearchParams();
    usp.set('page', `${pageNo}`);
    const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}character`;
    // const { data } = await fetchPagingProduct(usp.toString());
    const searchResult = await fetch(`${url}?${usp.toString()}`);
    const res: { results: []; info: apiQueryInterface } = await searchResult.json();
    setProductData(res.results);
    if (res.info.next) {
      setNext(getQueryString(res.info.next));
    }
    if (res.info.prev) {
      setPrev(getQueryString(res.info.prev));
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (pageNumber) {
      getMorePaginatedProducts(pageNumber);
    }
  }, [pageNumber]);

  return (
    <>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {loading ? <Loading /> : productList}
      </div>
      <div className="my-0 mx-auto w-1/2 sm:hidden">
        {(prev || next) && (
          <>
            <a
              href="/"
              custom-attr={prev}
              onClick={(e) => mobileChangePage(e, prev)}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="/"
              custom-attr={next}
              onClick={(e) => mobileChangePage(e, next)}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
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
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAllProduct();
  const { results, info } = data;
  return {
    props: {
      results,
      info,
    },
  };
};
