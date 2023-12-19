import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  flex: 1;

  @media screen and (min-width: 768px) {
    padding-top: 70px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 90px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 110px;
  }
`;
