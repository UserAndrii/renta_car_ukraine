import styled from '@emotion/styled';

import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Container = styled.div`
  background-color: var(--accent);
  padding: 20px 40px;

  @media screen and (min-width: 1200px) {
    padding: 40px 40px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 21px;
  line-height: 1.6;
  color: var(--btn-text);

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;

export const Location = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.2;
  color: var(--second-accent);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  margin-top: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
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

  font-size: 12px;
  line-height: 1.2;
  color: var(--btn-text);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Check = styled(AiOutlineCheckCircle)`
  width: 22px;
  height: 22px;
  color: var(--btn-text);
`;

export const Imeges = styled.div`
  max-width: 800px;
  overflow: hidden;
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  max-width: 340px;
  padding: 10px 20px;

  color: var(--btn-text);
  background-color: var(--second-accent);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color var(--transition);

  :hover,
  :focus {
    background-color: var(--hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 270px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
    width: 340px;
  }
`;
