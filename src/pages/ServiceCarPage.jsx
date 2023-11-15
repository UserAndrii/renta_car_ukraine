import { useState } from 'react';
import { useGetCarsQuery } from 'redux/carsApi';

import FilterForm from 'components/FilterForm';
import CatalogCarList from 'components/ServiceCarComponents/CatalogCarList';

const ServiceCarPage = () => {
  const { data: cars, isFetching } = useGetCarsQuery();
  const [filterValue, setFilterValue] = useState(null);

  console.log(cars);

  return (
    !isFetching && (
      <>
        <FilterForm setFilterValue={setFilterValue} cars={cars} />
        <CatalogCarList cars={cars} filterValue={filterValue} />
      </>
    )
  );
};

export default ServiceCarPage;
