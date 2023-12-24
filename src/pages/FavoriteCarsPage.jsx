import React, { useState } from 'react';
import { useGetCarsQuery } from 'redux/carsApi';

import FilterForm from 'components/FilterForm';
import CatalogList from 'components/CatalogComponents/CatalogList';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/auth/selectors';

const FavoriteCarsPage = () => {
  const { data: cars, isFetching } = useGetCarsQuery();

  const [filterValue, setFilterValue] = useState();
  const favoriteCars = useSelector(selectFavoriteCars);

  const favoriteCarsList = cars?.filter(car => favoriteCars?.includes(car._id));

  return (
    !isFetching && (
      <>
        <FilterForm setFilterValue={setFilterValue} cars={favoriteCarsList} />
        <CatalogList cars={favoriteCarsList} filterValue={filterValue} />
      </>
    )
  );
};

export default FavoriteCarsPage;
