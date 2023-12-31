import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 20px;
  gap: 20px;

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
    padding: 20px 50px;
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const Label = styled.label`
  color: var(--accent);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.43;

  & > span {
    color: var(--main-text);
    font-size: 9px;
  }

  @media screen and (min-width: 768px) {
    & > span {
      font-size: 12px;
    }
  }
`;

export const Input = styled.input`
  color: var(--main-text);
  font-size: 16px;
  line-height: 1.43;

  min-width: 280px;
  height: 50px;
  padding: 12px 16px;

  border-radius: 4px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  transition: border var(--transition);

  &:focus,
  &:hover {
    border: 2px solid var(--accent);
    outline: transparent;
  }

  &:disabled {
    border: none;
    background-color: transparent;
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;

  min-width: 280px;
  height: 50px;
  padding: 12px 16px;
  cursor: pointer;

  border: none;
  border-radius: 12px;
  background: var(--accent);
  color: var(--btn-text);
  transition: background var(--transition);

  :hover {
    background: var(--hover);
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }
`;

export const Imges = styled.img`
  margin-top: auto;
`;
