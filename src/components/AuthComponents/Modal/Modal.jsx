import { useLocation } from 'react-router-dom';
import { Wrapper } from './Modal.styled';

const Modal = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <h2>{pathname === '/login' ? 'Login' : 'Register'}</h2>
    </Wrapper>
  );
};

export default Modal;
