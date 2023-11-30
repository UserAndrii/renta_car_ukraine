import React from 'react';
import { useNavigate } from 'react-router-dom';

import { carsApi, useDeleteRentCarMutation } from 'redux/carsApi';

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
  const [deleteRentCar] = useDeleteRentCarMutation();

  const { img, description, make, model, year, rentalPrice, mileage, _id } =
    car;

  const handleDeleteCar = async id => {
    try {
      await deleteRentCar(id, {
        onSuccess: () => {
          carsApi.invalidateQueries('getCars');
        },
      });
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <Item>
      <ImageContainer>
        <Image src={img || noImages} alt={description} />
        <IconContainer className="box">
          <EditCar
            onClick={() => navigate(`/service/edit/${_id}`, { state: car })}
          />
          <DeleteCar onClick={() => handleDeleteCar(_id)} />
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
