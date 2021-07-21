/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import ReactPaginate from 'react-paginate';
import ProductCardTheme from '../component/ProductCardTheme';
import { ProductI, ProductInfo } from '../utils/interfaces';
import fetchAllProduct from '../actions/hooks/shopping/asyncHooks';

export default function Home({ results, info }: { results: ProductI[]; info: ProductInfo }) {
  const [productList, setProductList] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(0 as number);
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

  const pageCount = Math.ceil(info.count / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected + 1);
  };

  const getMorePaginatedProducts = async (pageNo: number) => {
    const usp = new URLSearchParams();
    usp.set('page', `${pageNo}`);
    const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}character`;
    // const { data } = await fetchPagingProduct(usp.toString());
    const searchResult = await fetch(`${url}?${usp.toString()}`);
    const res: { results: [] } = await searchResult.json();
    setProductData(res.results);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (pageNumber) {
      getMorePaginatedProducts(pageNumber);
    }
  }, [pageNumber]);

  return (
    <>
      <div className="root-card flex flex-wrap">
        {productList}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={changePage}
          containerClassName="paginationBtns"
          pageClassName="page-item"
          activeClassName="paginationActive"
          pageLinkClassName="page-link"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          previousClassName="page-item"
          nextClassName="page-item"
        />
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
