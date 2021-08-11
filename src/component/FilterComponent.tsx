import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import filterSearch from '../utils/filterSearch';
import { showCompareModal } from '../../redux/addToCompareSlice';
import { filter, characterGender, characterStatus } from '../../constants/filterValue';

type filterProps = {
  id: number;
  name: string;
};

const FilterComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  //   const [checkedState, setCheckedState] = useState(new Array(filter.length).fill(false));
  //   const handleOnChange = (position: number) => {
  //     const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
  //     console.log('first updatedCheckedState ', updatedCheckedState);
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

  const setCompareModal = () => {
    dispatch(showCompareModal({ show: true }));
  };

  return (
    <>
      <body className="overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
        <div className="productListingWrapper mx-auto pt-4 pb-8 container">
          <div className="bg-grey col-12 mt-3 align-middle justify-content-center md:flex xl:flex">
            <button
              type="button"
              // className="btn btn-light md:mr-10 xl:mr-10 shadow-sm collapsed w-full p-2 flex-col mb-2"
              className="btn btn-light md:mr-10 xl:mr-10 shadow-sm sm:collapsed sm:w-full sm:p-2 sm:flex-col sm:mb-2"
              data-toggle="collapse"
              data-target="#filters"
            >
              Filters <i className="fa fa-filter" />
            </button>
            <input
              type="text"
              // className="border-2 p-2 w-full p-6 flex-col mb-2"
              className="border-2 p-2 sm:w-full sm:p-6 sm:flex-col mb-2 xl:col-8 md:col-8"
              placeholder="Search Product..."
              id="search-filter"
            />
            <button
              type="button"
              // className="btn btn-light md:ml-10 xl:ml-10 shadow-sm w-full md:w-1/3 xl:w-1/4 flex-col"
              className="btn btn-light md:ml-10 xl:ml-10 shadow-sm w-full md:w-1/3 xl:w-1/4 flex-col"
              data-toggle="collapse"
              data-target="#compare"
              onClick={setCompareModal}
            >
              Compare
            </button>
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
