import { useState } from 'react';
import {
  Input,
  Label,
  PasswordlIconInvisible,
  PasswordlIconVisible,
} from '../FormComponent/FormComponent.styled';

const PasswordInput = ({ setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Label>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        minlength="4"
        maxlength="32"
        required
        autoComplete="off"
      />
      {showPassword ? (
        <PasswordlIconVisible onClick={() => setShowPassword(prev => !prev)} />
      ) : (
        <PasswordlIconInvisible
          onClick={() => setShowPassword(prev => !prev)}
        />
      )}
    </Label>
  );
};

export default PasswordInput;
