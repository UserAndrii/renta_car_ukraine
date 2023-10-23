import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail, AiFillLock, AiFillUnlock } from 'react-icons/ai';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-right: 32px;

  outline: none;
  border: none;
  border-bottom: 2px solid blue;
  background-color: transparent;
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
`;

export const PasswordlIconInvisible = styled(AiFillLock)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  cursor: pointer;
  width: 15;
  height: 15px;
  color: var(--btn-text);
`;

export const PasswordlIconVisible = styled(AiFillUnlock)`
  position: absolute;
  bottom: 8px;
  right: 8px;

  cursor: pointer;
  width: 15;
  height: 15px;
  color: var(--btn-text);
`;
