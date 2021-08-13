import React, { useState } from 'react';
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch';
import { filter } from '../constants/filterValue';

type filterProps = {
  id: number;
  name: string;
};

const Filter = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
    filterSearch({ router, species: value, page: 1 });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSort(value);
    filterSearch({ router, species: value, page: 1 });
  };

  // useEffect(() => {
  //   filterSearch({ router, species: search ? search.toLowerCase() : 'all' });
  // }, [search]);

  return (
    <div className="input-group">
      <div className="input-group-prepend col-md-2 px-0 mt-2">
        <select className="custom-select text-capitalize" value={category} onChange={handleCategory}>
          <option value="all">All Products</option>

          {filter.map((item: filterProps) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <form autoComplete="off" className="mt-2 col-md-8 px-0">
        <input
          type="text"
          className="form-control"
          list="title_product"
          value={search.toLowerCase()}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="input-group-prepend col-md-2 px-0 mt-2">
        <select className="custom-select text-capitalize" value={sort} onChange={handleSort}>
          <option value="-createdAt">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="-sold">Best sales</option>
          <option value="-price">Price: Hight-Low</option>
          <option value="price">Price: Low-Hight</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
