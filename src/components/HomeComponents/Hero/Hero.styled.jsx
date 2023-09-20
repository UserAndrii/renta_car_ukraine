import styled from '@emotion/styled';

import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Container = styled.div`
  background-color: #3470ff;
  padding: 20px 40px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 34px;
  line-height: 1.6;
  color: #fff;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.2;
  color: #fec100;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  margin-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 22px;
  line-height: 1.2;
  color: #fff;
`;

export const Check = styled(AiOutlineCheckCircle)`
  width: 22px;
  height: 22px;
  color: #fff;
`;

export const Imeges = styled.div`
    max-width: 800px;
    overflow: hidden;
`

export const Button = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;

  width: 340px;
  height: 50px;
  padding: 5px;

  color: #fff;
  background-color: #fec100;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;
