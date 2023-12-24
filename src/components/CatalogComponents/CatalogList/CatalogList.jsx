import { useEffect, useState } from 'react';

import { List } from './CatalogList.styled';

import LoadMoreBtn from '../LoadMoreBtn';
import CatalogListItem from '../CatalogListItem';
import NoFavoriteCars from '../NoFavoriteCars';

const CatalogList = ({ cars, filterValue }) => {
  const elementsOnThePage = 8;
  const [currentIndex, setCurrentIndex] = useState(elementsOnThePage);

  const [favoriteCars, setFavoriteCars] = useState(
    JSON.parse(localStorage.getItem('favoriteCars')) || []
  );

  useEffect(() => {
    localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  function filterCars(cars, filterValue) {
    if (!filterValue) return cars;

    const { brand, price, fromMileage, toMileage } = filterValue;

    return cars.filter(car => {
      const passesBrand =
        !brand || car.make.toLowerCase() === brand.toLowerCase();
      const passesPrice =
        !price || parseInt(car.rentalPrice.slice(1)) <= parseInt(price);
      const passesMileage =
        !fromMileage ||
        !toMileage ||
        (car.mileage >= parseInt(fromMileage) &&
          car.mileage <= parseInt(toMileage));

      return passesBrand && passesPrice && passesMileage;
    });
  }

  const filteredCars = filterCars(cars, filterValue);

  const toggleFavorite = id => {
    if (favoriteCars.includes(id)) {
      setFavoriteCars(prev => prev.toSpliced(favoriteCars.indexOf(id), 1));
    } else {
      setFavoriteCars(prev => [...prev, id]);
    }
  };

  return (
    <>
      {filteredCars?.length > 0 ? (
        <List>
          {filteredCars.slice(0, currentIndex).map(car => (
            <CatalogListItem
              car={car}
              key={car._id}
              favoriteCars={favoriteCars}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </List>
      ) : (
        <NoFavoriteCars />
      )}

      {filteredCars.length > elementsOnThePage &&
        currentIndex < filteredCars.length && (
          <LoadMoreBtn
            loadMore={() => setCurrentIndex(prev => prev + elementsOnThePage)}
          />
        )}
    </>
  );
};

export default CatalogList;
