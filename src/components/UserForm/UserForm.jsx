import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAdmin, selectVerifiedEmail } from 'redux/auth/selectors';
import {
  resendVerifyUserEmail,
  sendEmailAdminPermission,
  updateUser,
} from 'redux/auth/operations';
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

const UserForm = () => {
  const dispatch = useDispatch();
  const verifiedEmail = useSelector(selectVerifiedEmail);
  const isAdmin = useSelector(selectIsAdmin);
  const { userName, email } = useSelector(state => state.auth.user);

  const [name, setName] = useState(userName);
  const [userEmail, setUserEmail] = useState(email);
  const [disabledInput, setDisabledInput] = useState(true);

  const sendVerifyCode = () => {
    dispatch(resendVerifyUserEmail()).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) {
          toast.error('Oops, something went wrong! Please, try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success(
            'The new verification letter has been sent successfully',
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        }
      }
    );
  };

  const userUpdate = () => {
    setDisabledInput(prev => !prev);

    if (disabledInput) return;

    if (userName === name && email === userEmail) {
      toast.error('You have not changed any fields.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    dispatch(updateUser({ userName: name, email: userEmail })).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) {
          toast.error('Oops, something went wrong! Please, try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
          setDisabledInput(prev => !prev);
          return;
        }
      }
    );

    toast.success('You have successfully changed your credentials.', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

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
              autoComplete="off"
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
              autoComplete="off"
            />
            <Text>
              Your email is {verifiedEmail ? 'verified' : 'not verified'}
            </Text>
          </InputWrapper>
        </Wrapper>

        <BtnWrapper>
          <Btn
            type="button"
            onClick={() => {
              userUpdate();
            }}
          >
            {disabledInput ? 'Edit information' : 'Save'}
          </Btn>
          {!verifiedEmail && (
            <Btn type="button" onClick={() => sendVerifyCode()}>
              Send me the verification code
            </Btn>
          )}

          {!isAdmin && (
            <Btn
              type="button"
              onClick={() => dispatch(sendEmailAdminPermission())}
            >
              I want to become an admin
            </Btn>
          )}
        </BtnWrapper>

        <Imges src={Cars} alt="other background cars" />
      </Container>
    </>
  );
};

export default UserForm;
