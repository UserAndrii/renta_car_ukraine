import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    padding: 20px 112px 80px;
  }
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
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 3px solid var(--second-accent);
  border-radius: 10px;
  background-color: var(--accent);

  .icons {
    width: 24px;
    height: 24px;
    color: var(--btn-text);
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 230px;
  }
`;

export const Imeges = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }
`;

export const SecondTitle = styled.h3`
  font-size: 18px;
  line-height: 1.6;
  color: var(--main-text);
  margin-bottom: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;

export const GetList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ListNum = styled.li`
  @media screen and (max-width: 767px) {
    :nth-child(even) {
      margin-left: 50%;
    }

    :nth-child(odd) {
      margin-right: 50%;
    }
  }
`;

export const Number = styled.h4`
  font-size: 22px;
  line-height: 1.2;
`;
