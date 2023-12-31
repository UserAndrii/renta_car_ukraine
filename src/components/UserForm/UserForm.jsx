import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Btn,
  Wrapper,
  Container,
  Input,
  InputWrapper,
  Label,
  Text,
  Title,
  Imges,
  BtnWrapper,
} from './UserForm.styled';
import Cars from 'images/car-rental.png';
import { selectVerifiedEmail } from 'redux/auth/selectors';

const UserForm = () => {
  const { userName, email } = useSelector(state => state.auth.user);
  const verifiedEmail = useSelector(selectVerifiedEmail);

  const [name, setName] = useState(userName);
  const [userEmail, setUserEmail] = useState(email);
  const [disabledInput, setDisabledInput] = useState(true);

  return (
    <>
      <Title>Personal data</Title>

      <Container>
        <Wrapper>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              disabled={disabledInput}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={e => setUserEmail(e.target.value)}
              value={userEmail}
              disabled={disabledInput}
            />
            <Text>
              Your email is {verifiedEmail ? 'verified' : 'not verified'}
            </Text>
          </InputWrapper>
        </Wrapper>

        <BtnWrapper>
          <Btn type="button" onClick={() => setDisabledInput(prev => !prev)}>
            {disabledInput ? 'Edit information' : 'Save'}
          </Btn>
          <Btn type="button">Send me the verification code</Btn>
          <Btn type="button">I want to become an admin</Btn>
        </BtnWrapper>

        <Imges src={Cars} alt="other background cars" />
      </Container>
    </>
  );
};

export default UserForm;
