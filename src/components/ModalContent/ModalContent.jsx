import React from 'react';
import {
  CarModel,
  ConditionsWrap,
  Description,
  Image,
  Item,
  Line,
  RentalBtn,
  Subtitle,
  Text,
  Value,
} from './ModalContent.styled';

const ModalContent = ({ car }) => {
  const {
    img,
    description,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  /* eslint-disable */
  const [_, __, ___, city, country] = address.split(' ');
  const [minimumAge, validLicense, securityDeposit] =
    rentalConditions.split('\n');
  /* eslint-enable */

  function formatNumber(number) {
    const numStr = String(number);

    switch (numStr.length) {
      case 3:
        return number;
      case 4:
        return numStr[0] + ',' + numStr.slice(1);
      case 5:
        return numStr.slice(0, 2) + ',' + numStr.slice(2);
      default:
        return number;
    }
  }

  return (
    <>
      <Image src={img} alt={description} />

      <CarModel>
        {make} <span>{model}</span>, {year}
      </CarModel>

      <Description>
        {city.replace(',', '')}
        <Line>|</Line>
        {country}
        <Line>|</Line>
        Id: {id}
        <Line>|</Line>
        Year: {year}
        <Line>|</Line>
        Type: {type}
      </Description>
      <Description>
        Fuel Consumption: {fuelConsumption}
        <Line>|</Line>
        Engine Size: {engineSize}
      </Description>

      <Text>{description}</Text>

      <Subtitle>Accessories and functionalities:</Subtitle>

      <Description>
        {accessories.map((acc, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Line>|</Line>}
            {acc}
          </React.Fragment>
        ))}
      </Description>

      <Description>
        {functionalities.map((fun, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Line>|</Line>}
            {fun}
          </React.Fragment>
        ))}
      </Description>

      <Subtitle>Rental Conditions:</Subtitle>

      <ConditionsWrap>
        <Item>
          <Value>
            Minimum age: <span>{minimumAge.replace('Minimum age: ', '')}</span>
          </Value>
        </Item>
        <Item>
          <Value>{validLicense}</Value>
        </Item>
        <Item>
          <Value>{securityDeposit}</Value>
        </Item>
        <Item>
          <Value>
            Mileage: <span>{formatNumber(mileage)}</span>
          </Value>
        </Item>
        <Item>
          <Value>
            Price: <span>{rentalPrice}</span>
          </Value>
        </Item>
      </ConditionsWrap>

      <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
    </>
  );
};

export default ModalContent;
