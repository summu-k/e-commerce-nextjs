import { FC } from 'react';
import { NextRouter } from 'next/router';

interface FilterSearchProps {
  router: NextRouter;
  page?: number;
  species?: string;
  gender?: string;
  status?: string;
}

const filterSearch: FC<FilterSearchProps> = ({ router, page, species, gender, status }): any => {
  const path = router.pathname;
  const { query } = router;

  if (page) query.page = page.toString();
  if (species) query.species = species;
  if (gender) query.gender = gender;
  if (status) query.status = status;

  router.push({
    pathname: path,
    query,
  });
};

export default filterSearch;
