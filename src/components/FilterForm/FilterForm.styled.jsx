import styled from '@emotion/styled';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    padding-top: 100px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;
  gap: 18px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  color: var(--select-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Select = styled.select`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.11;
  color: var(--main-text);
  background-color: var(--label-text);

  outline: none;
  appearance: none;
  border: none;
  border-radius: 14px;

  padding: 14px 18px;
  margin-top: 8px;
  width: 274px;
  height: 44px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    width: 220px;
    height: 48px;
  }
`;

export const Option = styled.option`
  position: relative;
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  :hover {
    background-color: var(--accent);
  }
`;

export const CustomInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.11;

  color: var(--main-text);
  background-color: var(--label-text);
  border: none;
  outline: none;

  width: 137px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 120px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    width: 160px;
  }

  :first-of-type {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    padding: 14px 5px 14px 52px;
    height: 44px;

    @media screen and (min-width: 1200px) {
      padding: 14px 5px 14px 75px;
      height: 48px;
    }
  }

  :last-of-type {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 14px 5px 14px 50px;
    height: 44px;

    @media screen and (min-width: 768px) {
      padding: 14px 5px 14px 32px;
    }

    @media screen and (min-width: 1200px) {
      padding: 14px 5px 14px 53px;
      height: 48px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  :before {
    content: 'From:';
    color: var(--main-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.11;

    position: absolute;
    top: 57%;
    left: 12px;
    transform: translateY(-50%);

    @media screen and (min-width: 1200px) {
      font-size: 18px;
      left: 24px;
    }
  }
  :after {
    content: 'To:';
    color: var(--main-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.11;

    position: absolute;
    top: 57%;
    right: 90px;
    transform: translateY(-50%);

    @media screen and (min-width: 1200px) {
      font-size: 18px;
      right: 110px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--btn-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  width: 120px;
  height: 44px;

  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: var(--accent);
  transition: background-color var(--transition);

  @media screen and (min-width: 1200px) {
    width: 136px;
    height: 48px;
  }

  :hover,
  :focus {
    background-color: var(--hover);
  }
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: var(--btn-text);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;

  @media screen and (max-width: 767px) {
    max-width: 274px;
  }
`;
