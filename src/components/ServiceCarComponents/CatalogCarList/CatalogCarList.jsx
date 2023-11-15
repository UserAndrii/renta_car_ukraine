import CarItem from '../CarItem';
import { List } from './CatalogCarList.styled';

const CatalogCarList = ({ cars, filterValue }) => {
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

  return (
    <List>
      {filteredCars?.map(car => (
        <CarItem car={car} key={car.id} />
      ))}
    </List>
  );
};

export default CatalogCarList;
