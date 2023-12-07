import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 274px;
  grid-gap: 20px;

  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    grid-gap: 50px 29px;
    padding: 50px 128px 100px;
    grid-template-columns: 1fr 1fr;
  }
`;
