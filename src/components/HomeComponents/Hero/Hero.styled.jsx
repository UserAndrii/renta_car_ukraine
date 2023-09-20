import styled from '@emotion/styled';

import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Container = styled.div`
  background-color: var(--accent);
  padding: 20px 40px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 34px;
  line-height: 1.6;
  color: var(--btn-text);
`;

export const Location = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 1.2;
  color: var(--second-accent);
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
  color: var(--btn-text);
`;

export const Check = styled(AiOutlineCheckCircle)`
  width: 22px;
  height: 22px;
  color: var(--btn-text);
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
`;
