import styled from '@emotion/styled';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  padding-top: 150px;
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
  font-size: 18px;
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
  height: 48px;
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
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  color: var(--main-text);
  background-color: var(--label-text);
  border: none;
  outline: none;

  width: 160px;
  margin-top: 8px;

  :first-of-type {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    padding: 14px 5px 14px 73px;
  }

  :last-of-type {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 14px 5px 14px 52px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  :before {
    content: 'From:';
    color: var(--main-text);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    position: absolute;
    top: 57%;
    left: 24px;
    transform: translateY(-50%);
  }
  :after {
    content: 'To:';
    color: var(--main-text);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;

    position: absolute;
    top: 57%;
    right: 110px;
    transform: translateY(-50%);
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

  width: 136px;
  height: 48px;

  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: var(--accent);
  transition: background-color var(--transition);

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
