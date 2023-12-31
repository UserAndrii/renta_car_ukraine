import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVerifyEmailUser } from 'redux/auth/operations';
import {
  Container,
  Imges,
  Logo,
  SpanLogo,
  StyledButton,
  TextVerify,
} from './VerifyEmail.styled';
import Cars from 'images/car-rental.png';

const VerifyEmail = () => {
  const [isErrorToken, setIsErrorToken] = useState(false);

  const dispatch = useDispatch();
  const { verifyToken } = useParams();

  useEffect(() => {
    dispatch(getVerifyEmailUser(verifyToken)).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) {
          setIsErrorToken(true);
        }
        setIsErrorToken(true);
      }
    );
  }, [dispatch, verifyToken]);

  return (
    <Container>
      <Logo>
        <SpanLogo>RENTA</SpanLogo>CAR
      </Logo>

      <Imges src={Cars} alt="other background cars" />

      <TextVerify>
        {isErrorToken
          ? 'Your email was not verified 🥺, please try again'
          : 'Your email has been successfully verified 😀! Thank you!'}
      </TextVerify>
      <StyledButton to="/">Back to home</StyledButton>
    </Container>
  );
};

export default VerifyEmail;
