import { useLocation } from 'react-router-dom';
import { Title, Wrapper } from './Modal.styled';

import FormComponent from '../FormComponent';

const Modal = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Title>{pathname === '/login' ? 'Login' : 'Register'}</Title>
      <FormComponent />
    </Wrapper>
  );
};

export default Modal;
