import { useState } from 'react';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';
import { Button, Form } from './FormComponent.styled';
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
    </Form>
  );
};

export default FormComponent;
