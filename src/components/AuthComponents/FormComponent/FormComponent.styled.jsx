import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail, AiFillLock, AiFillUnlock } from 'react-icons/ai';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 25px;
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-right: 32px;

  font-size: 14px;
  line-height: 1.2;
  color: var(--btn-text);

  outline: none;
  border: none;
  border-bottom: 2px solid blue;
  background-color: transparent;

  ::placeholder {
    font-size: 14px;
    line-height: 1.2;
    color: var(--btn-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;

    ::placeholder {
      font-size: 18px;
    }
  }
`;

export const UserIcon = styled(FaUser)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  width: 15;
  height: 15px;
  color: var(--btn-text);
`;

export const EmailIcon = styled(AiOutlineMail)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  width: 15;
  height: 15px;
  color: var(--btn-text);

  @media screen and (min-width: 768px) {
    width: 25;
    height: 25px;
  }
`;

export const PasswordlIconInvisible = styled(AiFillLock)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  cursor: pointer;
  width: 15;
  height: 15px;
  color: var(--btn-text);

  @media screen and (min-width: 768px) {
    width: 25;
    height: 25px;
  }
`;

export const PasswordlIconVisible = styled(AiFillUnlock)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  cursor: pointer;
  width: 15;
  height: 15px;
  color: var(--btn-text);

  @media screen and (min-width: 768px) {
    width: 25;
    height: 25px;
  }
`;

export const Button = styled.button`
  color: var(--btn-text);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;

  background: var(--hover);
  border: none;
  border-radius: 12px;
  transition: box-shadow var(--transition);

  cursor: pointer;
  padding: 12px 12px;
  margin-top: auto;

  :hover,
  :focus {
    color: var(--btn-text);
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
  }
`;

export const InAuth = styled(Link)`
  font-size: 14px;
  line-height: 1.2;
  color: var(--btn-text);
`;
