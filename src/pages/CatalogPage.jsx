import { useState } from 'react';
import { useGetCarsQuery } from 'redux/carsApi';

import CatalogList from 'components/CatalogComponents/CatalogList';
import FilterForm from 'components/FilterForm';

const CatalogPage = () => {
  const { data: cars, isFetching } = useGetCarsQuery();

  const [filterValue, setFilterValue] = useState(null);

  return (
    !isFetching && (
      <>
        <FilterForm setFilterValue={setFilterValue} cars={cars} />
        <CatalogList cars={cars} filterValue={filterValue} />
      </>
    )
  );
};

export default CatalogPage;
