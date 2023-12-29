import { Input, Label, EmailIcon } from '../FormComponent/FormComponent.styled';

const EmailInput = ({ setEmail }) => {
  return (
    <Label>
      <Input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        autoComplete="false"
        required
      />
      <EmailIcon />
    </Label>
  );
};

export default EmailInput;
