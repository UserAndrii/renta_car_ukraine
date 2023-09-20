import styled from '@emotion/styled';

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

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Select = styled.select`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: #121417;
  background-color: #f7f7fb;

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
    background-color: #3470ff;
  }
`;

export const CustomInput = styled.input`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  color: #121417;
  background-color: #f7f7fb;
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
    color: #121417;
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
    color: #121417;
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
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  width: 136px;
  height: 48px;
  padding: 14px 44px;

  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;