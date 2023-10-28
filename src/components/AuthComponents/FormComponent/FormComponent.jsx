import { useState } from 'react';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';
import { Button, Form, InAuth } from './FormComponent.styled';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userLogin, userRegistration } from 'redux/auth/operations';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (pathname === '/register') {
      dispatch(userRegistration({ userName, email, password })).then(
        ({ meta: { rejectedWithValue } }) => {
          if (rejectedWithValue) console.log('error');
        }
      );
      return;
    }

    dispatch(userLogin({ email, password })).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) console.log('error');
      }
    );

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {pathname === '/register' && <TextInput setText={setUserName} />}
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <Button type="submit">Submit</Button>
      <InAuth to={pathname === '/register' ? '/login' : '/register'}>
        {pathname !== '/register'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Log In'}
      </InAuth>
    </Form>
  );
};

export default FormComponent;
