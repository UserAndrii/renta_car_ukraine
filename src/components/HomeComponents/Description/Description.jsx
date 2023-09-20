import React from 'react';
import {
  Container,
  GetList,
  IconWrapper,
  Imeges,
  Item,
  List,
  Number,
  SecondTitle,
  Text,
  Title,
  Wrapper,
} from './Description.styled';

import { BsFillPersonFill } from 'react-icons/bs';
import { RiTreasureMapFill } from 'react-icons/ri';
import { AiFillCar, AiFillWallet } from 'react-icons/ai';
import { BiSolidTimeFive } from 'react-icons/bi';

import DescriptionImg from '../../../images/toyota_description.png';

const Description = () => {
  return (
    <Container>
      <Title>RENTAL TERMS</Title>
      <Wrapper>
        <List>
          <Item>
            <IconWrapper>
              <BsFillPersonFill className="icon" />
            </IconWrapper>
            <Text>Age from 21 years</Text>
          </Item>
          <Item>
            <IconWrapper>
              <RiTreasureMapFill className="icon" />
            </IconWrapper>
            <Text>
              Territory of car use Ukraine. It is possible to go abroad
            </Text>
          </Item>
          <Item>
            <IconWrapper>
              <AiFillCar className="icon" />
            </IconWrapper>
            <Text>Driving experience from 2 years</Text>
          </Item>
          <Item>
            <IconWrapper>
              <AiFillWallet className="icon" />
            </IconWrapper>
            <Text>
              The deposit for the time of use depends on the class of the car.
              Amount from UAH 7,000
            </Text>
          </Item>
          <Item>
            <IconWrapper>
              <BiSolidTimeFive className="icon" />
            </IconWrapper>
            <Text>The minimum rental period is 1 day</Text>
          </Item>
        </List>
        <Imeges>
          <img src={DescriptionImg} alt="" />
        </Imeges>
      </Wrapper>
      <SecondTitle>YOU GET</SecondTitle>
      <GetList>
        <li>
          <Number>01</Number>
          <Text>Cars are fully insured</Text>
        </li>
        <li>
          <Number>02</Number>
          <Text>We deliver the car to the address within an hour</Text>
        </li>
        <li>
          <Number>03</Number>
          <Text>Delivery of the car in a clean state and with a full tank</Text>
        </li>
        <li>
          <Number>04</Number>
          <Text>24/7 online support</Text>
        </li>
        <li>
          <Number>05</Number>
          <Text>Help on the way</Text>
        </li>
      </GetList>
    </Container>
  );
};

export default Description;
