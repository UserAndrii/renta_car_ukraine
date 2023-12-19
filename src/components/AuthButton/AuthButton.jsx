import { Links } from './AuthButton.styled';

const AuthButton = ({ toggleMenu }) => {
  return (
    <>
      <li>
        <Links onClick={toggleMenu} to="/login" style={{ marginRight: 10 }}>
          Log In
        </Links>
      </li>
      <li>
        <Links onClick={toggleMenu} to="/register">
          Sign Up
        </Links>
      </li>
    </>
  );
};

export default AuthButton;
