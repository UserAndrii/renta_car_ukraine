import { useEffect, useState } from 'react';

import { List } from './CatalogList.styled';

import LoadMoreBtn from '../LoadMoreBtn';
import CatalogListItem from '../CatalogListItem';
import NoFavoriteCars from '../NoFavoriteCars';

const CatalogList = ({ cars, filterValue }) => {
  const elementsOnThePage = 8;
  // const { pathname } = useLocation();

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

  console.log(currentIndex);

  // const renderCars = (start, end) => {
  //   switch (pathname) {
  //     case '/catalog':
  //       return filteredCars
  //         ?.slice(start, end)
  //         .map(car => (
  //           <CatalogListItem
  //             car={car}
  //             key={car._id}
  //             favoriteCars={favoriteCars}
  //             toggleFavorite={toggleFavorite}
  //           />
  //         ));

  //     case '/favorites':
  //       return filteredCars
  //         ?.filter(car => favoriteCars.includes(car._id))
  //         .slice(start, end)
  //         .map(car => (
  //           <CatalogListItem
  //             car={car}
  //             key={car._id}
  //             favoriteCars={favoriteCars}
  //             toggleFavorite={toggleFavorite}
  //           />
  //         ));

  //     case '/service':
  //       return filteredCars
  //         ?.slice(start, end)
  //         .map(car => (
  //           <CatalogListItem
  //             car={car}
  //             key={car._id}
  //             favoriteCars={favoriteCars}
  //             toggleFavorite={toggleFavorite}
  //           />
  //         ));

  //     default:
  //       return;
  //   }
  // };

  const toggleFavorite = id => {
    if (favoriteCars.includes(id)) {
      setFavoriteCars(prev => prev.toSpliced(favoriteCars.indexOf(id), 1));
    } else {
      setFavoriteCars(prev => [...prev, id]);
    }
  };

  // const renderedCars = renderCars(0, currentIndex);

  return (
    <>
      {filteredCars?.length > 0 ? (
        <List>
          {filteredCars.map(car => (
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

      <LoadMoreBtn
        loadMore={() =>
          setCurrentIndex(prevIndex => prevIndex + elementsOnThePage)
        }
      />
    </>
  );
};

export default CatalogList;
