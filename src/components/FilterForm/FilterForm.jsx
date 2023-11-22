import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CustomInput,
  Label,
  Option,
  Select,
  InputWrapper,
  Button,
  AddIcon,
} from './FilterForm.styled';

const FilterForm = ({ setFilterValue, cars, addCar }) => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const brandList = Array.from(new Set(cars?.map(car => car.make))).sort();
  const priceList = cars
    ?.map(car => car.rentalPrice.slice(1))
    .sort((a, b) => a - b)
    .filter((price, index, array) => array.indexOf(price) === index);

  const handleSubmit = e => {
    e.preventDefault();
    const filteredCars = {
      brand,
      price,
      fromMileage,
      toMileage,
    };
    setFilterValue(filteredCars);
  };

  const handleReset = e => {
    setBrand('');
    setPrice('');
    setFromMileage('');
    setToMileage('');
    setFilterValue(null);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Label htmlFor="brand">
        Car brand
        <Select
          id="brand"
          value={brand}
          onChange={e => setBrand(e.target.value)}
          style={{ width: 224 }}
        >
          <Option value="">Enter the text</Option>
          {brandList?.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="price">
        Price/ 1 hour
        <Select
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={{ width: 125 }}
        >
          <Option value="">To $</Option>
          {priceList?.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="mileage">
        Сar mileage / km
        <InputWrapper>
          <CustomInput
            type="number"
            id="mileage"
            min="0"
            max="99999"
            value={fromMileage}
            onChange={e => setFromMileage(e.target.value)}
          />
          <CustomInput
            type="number"
            id="mileageto"
            min="0"
            max="99999"
            value={toMileage}
            onChange={e => setToMileage(e.target.value)}
          />
        </InputWrapper>
      </Label>

      <Button type="submit">Search</Button>
      <Button onClick={handleReset}>Сancel</Button>
      {addCar && (
        <Button onClick={() => navigate('/service/add_new_car')}>
          Add <AddIcon />
        </Button>
      )}
    </Container>
  );
};

export default FilterForm;
