import React, { useState } from 'react'
import { useGetCarsQuery } from 'redux/carsApi';

import FilterForm from 'components/FilterForm';
import CatalogList from 'components/CatalogComponents/CatalogList'

const FavoriteCarsPage = () => {
  const { data: cars } = useGetCarsQuery();

  const [filterValue, setFilterValue] = useState();

  return (
    <>
      <FilterForm setFilterValue={setFilterValue} cars={cars} />
      <CatalogList cars={cars} filterValue={filterValue} />
    </>
  );
}

export default FavoriteCarsPage
