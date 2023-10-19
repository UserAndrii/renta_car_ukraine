import { Container } from './AuthContaier.styled';
import Cars from 'images/car-rental.png';

const AuthContaier = ({ children }) => {
  return (
    <Container>
      {children}
      <img src={Cars} alt="other background cars" />
    </Container>
  );
};

export default AuthContaier;
