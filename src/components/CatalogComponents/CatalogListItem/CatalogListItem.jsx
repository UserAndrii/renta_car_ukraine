import { useState } from 'react';
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

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import Modal from 'components/Modal';
import ModalContent from 'components/ModalContent';
import noImages from '../../../images/no-img.jpg';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'redux/auth/selectors';

const CatalogListItem = ({ car, favoriteCars, toggleFavorite }) => {
  const isLogged = useSelector(selectIsLogged);

  const {
    id,
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
  const [_, __, ___, city, country] = address.split(' ');
  /* eslint-enable */

  return (
    <>
      <Item>
        {favoriteCars.includes(id) ? (
          <AiFillHeart
            className={isLogged ? 'heart heart-active' : 'heard none'}
            onClick={() => toggleFavorite(id)}
          />
        ) : (
          <AiOutlineHeart
            className={isLogged ? 'heart' : 'heard none'}
            onClick={() => toggleFavorite(id)}
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
            {city.replace(',', '')}
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
            {functionalities[0].substring(0, 12) + '...'}
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
