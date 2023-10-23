import { Input, Label, UserIcon } from '../FormComponent/FormComponent.styled';

const TextInput = ({ setText }) => {
  return (
    <Label>
      <Input
        type="text"
        placeholder="Name"
        onChange={e => setText(e.target.value)}
      />
      <UserIcon />
    </Label>
  );
};

export default TextInput;
