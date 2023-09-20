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

const CatalogListItem = ({ car, favoriteCars, toggleFavorite }) => {
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
            className="heart heart-active"
            onClick={() => toggleFavorite(id)}
          />
        ) : (
          <AiOutlineHeart
            className="heart"
            onClick={() => toggleFavorite(id)}
          />
        )}

        <Image src={img} alt={description} />

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
