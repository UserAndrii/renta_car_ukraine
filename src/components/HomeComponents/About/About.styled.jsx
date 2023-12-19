import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px 20px;
  background-color: rgb(247, 247, 247);
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: var(--main-text);
  margin: 30px 0;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px 112px;
    font-size: 28px;
  }
`;

export const SliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 30px 0;
`;

export const Imeges = styled.div`
  max-width: 240px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 440px;
  }
`;

export const TextWrap = styled.div`
  padding: 20px 10px;
  max-width: 600px;
  background-color: var(--accent);
  border-radius: 16px;
`;

export const Head = styled.h5`
  color: var(--btn-text);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: var(--btn-text);
  text-align: center;
  font-size: 10px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
