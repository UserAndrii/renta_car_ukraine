import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '../TextInput';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';

import { Button, Form, InAuth } from './FormComponent.styled';
import { userLogin, userRegistration } from 'redux/auth/operations';

const FormComponent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { pathname } = useLocation();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (pathname === '/register') {
      console.log(!userName || !email || !password);
      if (!userName || !email || !password) {
        toast.error(`Please fill in all fields, it's required!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      dispatch(userRegistration({ userName, email, password })).then(
        ({ meta: { rejectedWithValue } }) => {
          if (rejectedWithValue) {
            toast.error('Oops, something went wrong! Enter a valid email.', {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }
      );
      return;
    }

    dispatch(userLogin({ email, password })).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) {
          toast.error('Oops, the login or password is incorrect!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="false">
      {pathname === '/register' && <TextInput setText={setUserName} />}
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <Button type="submit">
        Submit{' '}
        <Hourglass
          visible={isLoading ? true : false}
          height="20"
          width="20"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      </Button>
      <InAuth to={pathname === '/register' ? '/login' : '/register'}>
        {pathname !== '/register'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Log In'}
      </InAuth>
    </Form>
  );
};

export default FormComponent;
