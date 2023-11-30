import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 274px;
  grid-gap: 20px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    grid-gap: 50px 29px;
    grid-template-columns: repeat(2, 274px);
    padding: 50px 128px 100px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 274px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 274px);
  }
`;
