import React from 'react';
import {
  DeleteCar,
  EditCar,
  IconContainer,
  Image,
  ImageContainer,
  Item,
  ModelCar,
  NameCar,
  NameWrapper,
} from './CarItem.styled';
import noImages from '../../../images/no-img.jpg';

const CarItem = ({ car }) => {
  const { img, description, make, model, year, rentalPrice, mileage } = car;

  return (
    <Item>
      <ImageContainer>
        <Image src={img || noImages} alt={description} />
        <IconContainer>
          <EditCar />
          <DeleteCar />
        </IconContainer>
      </ImageContainer>

      <NameWrapper>
        <NameCar>
          {make} <ModelCar>{model}</ModelCar>, <span>{year}</span>
        </NameCar>
        <p>{rentalPrice}</p>
      </NameWrapper>
      <span>Mileage: {mileage}</span>
    </Item>
  );
};

export default CarItem;
