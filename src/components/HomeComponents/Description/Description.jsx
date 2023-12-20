import React from 'react';
import {
  Container,
  GetList,
  IconWrapper,
  Imeges,
  Item,
  List,
  ListNum,
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
              <BsFillPersonFill className="icons" />
            </IconWrapper>
            <Text>Age from 21 years</Text>
          </Item>
          <Item>
            <IconWrapper>
              <RiTreasureMapFill className="icons" />
            </IconWrapper>
            <Text>
              Territory of car use Ukraine. It is possible to go abroad
            </Text>
          </Item>
          <Item>
            <IconWrapper>
              <AiFillCar className="icons" />
            </IconWrapper>
            <Text>Driving experience from 2 years</Text>
          </Item>
          <Item>
            <IconWrapper>
              <AiFillWallet className="icons" />
            </IconWrapper>
            <Text>
              The deposit for the time of use depends on the class of the car.
              Amount from UAH 7,000
            </Text>
          </Item>
          <Item>
            <IconWrapper>
              <BiSolidTimeFive className="icons" />
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
        <ListNum>
          <Number>01</Number>
          <Text>Cars are fully insured</Text>
        </ListNum>
        <ListNum>
          <Number>02</Number>
          <Text>We deliver the car to the address within an hour</Text>
        </ListNum>
        <ListNum>
          <Number>03</Number>
          <Text>Delivery of the car in a clean state and with a full tank</Text>
        </ListNum>
        <ListNum>
          <Number>04</Number>
          <Text>24/7 online support</Text>
        </ListNum>
        <ListNum>
          <Number>05</Number>
          <Text>Help on the way</Text>
        </ListNum>
      </GetList>
    </Container>
  );
};

export default Description;
