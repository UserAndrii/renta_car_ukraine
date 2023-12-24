import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { selectFavoriteCars, selectIsLogged } from 'redux/auth/selectors';
import { toggleUsersFavoriteCar } from 'redux/auth/operations';
import {
  Button,
  Description,
  Image,
  Item,
  Line,
  ModelCar,
  NameCar,
  NameWrapper,
} from './CatalogListItem.styled';

import Modal from 'components/Modal';
import ModalContent from 'components/ModalContent';
import noImages from '../../../images/no-img.jpg';

const CatalogListItem = ({ car }) => {
  const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLogged);
  const favoriteCars = useSelector(selectFavoriteCars);

  const {
    _id,
    img,
    address,
    description,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  const [isOpenModal, setIsOpenModal] = useState(false);

  /* eslint-disable */
  const [_, city, country] = address.split(',');
  /* eslint-enable */

  return (
    <>
      <Item>
        {favoriteCars?.includes(_id) ? (
          <AiFillHeart
            className={isLogged ? 'heart heart-active' : 'heard none'}
            onClick={() => dispatch(toggleUsersFavoriteCar({ id: _id }))}
          />
        ) : (
          <AiOutlineHeart
            className={isLogged ? 'heart' : 'heard none'}
            onClick={() => dispatch(toggleUsersFavoriteCar({ id: _id }))}
          />
        )}

        <Image src={img || noImages} alt={description} />

        <NameWrapper>
          <NameCar>
            {make} <ModelCar>{model}</ModelCar>, <span>{year}</span>
          </NameCar>
          <p>{rentalPrice}</p>
        </NameWrapper>

        <div>
          <Description>
            {city?.replace(',', '')}
            <Line>|</Line>
            {country}
            <Line>|</Line>
            {rentalCompany}
          </Description>
          <Description>
            {type}
            <Line>|</Line>
            {model}
            <Line>|</Line>
            {mileage}
            <Line>|</Line>
            {functionalities.length !== 0
              ? functionalities[0]?.substring(0, 12) + '...'
              : null}
          </Description>
        </div>

        <Button onClick={() => setIsOpenModal(true)}>Learn more</Button>
      </Item>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)} isOpenModal={isOpenModal}>
          <ModalContent car={car} />
        </Modal>
      )}
    </>
  );
};

export default CatalogListItem;
