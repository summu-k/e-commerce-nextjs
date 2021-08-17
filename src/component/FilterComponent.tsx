import React, { useState } from 'react';
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch';
import { filter, characterGender, characterStatus } from '../constants/filterValue';
// import LinkComponent from '../component/actionableButtons/LinkComponent';

type filterProps = {
  id: number;
  name: string;
};

const FilterComponent = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  //   const [checkedState, setCheckedState] = useState(new Array(filter.length).fill(false));
  //   const handleOnChange = (position: number) => {
  //     const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
  //     setCheckedState(updatedCheckedState);
  //   };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setGender(value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStatus(value);
  };

  const handleFilterChange = () => {
    filterSearch({ router, species: category, gender, status, page: 1 });
  };

  return (
    <>
      {/* <div className="flex items-center" id="store-nav-content">
        <LinkComponent
          linkhref="/"
          classname="pl-3 inline-block no-underline hover:text-black"
          linkname=""
          datatest="Index Filter"
          aria-label="Index Filter"
          target="_self"
        >
          <svg
            className="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
          </svg>
        </LinkComponent>

        <LinkComponent
          linkhref="/"
          classname="pl-3 inline-block no-underline hover:text-black"
          linkname=""
          datatest="Index Search"
          aria-label="Index Search"
          target="_self"
        >
          <svg
            className="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
          </svg>
        </LinkComponent>
      </div> */}
      <body className="overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
        <div className="productListingWrapper mx-auto pt-4 pb-8 container">
          <div className="bg-grey col-12 mt-3 align-middle justify-content-center md:flex xl:flex">
            <button
              type="button"
              className="btn btn-light md:mr-10 xl:mr-10 shadow-sm sm:collapsed sm:w-full sm:p-2 sm:flex-col sm:mb-2"
              data-toggle="collapse"
              data-target="#filters"
            >
              Filters <i className="fa fa-filter" />
            </button>
            <input
              type="text"
              className="border-2 p-2 sm:w-full sm:p-6 sm:flex-col mb-2 xl:col-8 md:col-8"
              placeholder="Search Product..."
              id="search-filter"
            />
          </div>

          <div id="filters" className="collapse">
            <hr className="solid col-9 mx-auto" />

            <div className="d-md-flex d-lg-flex d-xl-flex justify-content-around col-9 mx-auto">
              <div className="col-lg-4 col-xl-3 col-md-6">
                <article className="filter-group">
                  <header className="card-header">
                    <h6 className="title">Category </h6>
                  </header>

                  <div className="input-group-pr px-0 mt-2">
                    <select className="custom-select text-capitalize" value={category} onChange={handleCategory}>
                      <option value="all">All Products</option>

                      {filter.map((item: filterProps) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </article>
              </div>

              <div className="col-lg-4 col-xl-3 col-md-6">
                <article className="filter-group">
                  <header className="card-header">
                    <h6 className="title">Gender </h6>
                  </header>

                  <div className="input-group-pr px-0 mt-2">
                    <select className="custom-select text-capitalize" value={gender} onChange={handleGender}>
                      <option value="all">Gender</option>

                      {characterGender.map((genderProp: filterProps) => (
                        <option key={genderProp.id} value={genderProp.name}>
                          {genderProp.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <article className="filter-group">
                  <header className="card-header">
                    <h6 className="title">Status </h6>
                  </header>

                  <div className="input-group-pr px-0 mt-2">
                    <select className="custom-select text-capitalize" value={status} onChange={handleStatus}>
                      <option value="all">Status</option>

                      {characterStatus.map((statusProp: filterProps) => (
                        <option key={statusProp.id} value={statusProp.name}>
                          {statusProp.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </article>

                <a
                  href="#region"
                  onClick={() => handleFilterChange()}
                  className="btn btn-medium button mt-6 mb-12 md:mb-0 md:mt-10 inline-block  text-white bg-red-500 hover:bg-red-600 rounded-lg shadow mx-auto"
                  data-abc="true"
                  data-toggle="collapse"
                  data-target="#filters"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default FilterComponent;
