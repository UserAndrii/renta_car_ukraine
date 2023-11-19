import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { img, description, make, model, year, rentalPrice, mileage } = car;

  return (
    <Item>
      <ImageContainer>
        <Image src={img || noImages} alt={description} />
        <IconContainer className="box">
          <EditCar onClick={() => navigate('/service/edit', { state: car })} />
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
