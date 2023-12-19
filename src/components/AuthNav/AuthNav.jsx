import { useSelector } from 'react-redux';
import { AuthWrap } from './AuthNav.styled';
import { selectIsLogged } from 'redux/auth/selectors';
import UserInfo from 'components/UserInfo';
import AuthButton from 'components/AuthButton';

const AuthNav = ({ toggleMenu }) => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <AuthWrap>
      {isLogged ? (
        <UserInfo toggleMenu={toggleMenu} />
      ) : (
        <AuthButton toggleMenu={toggleMenu} />
      )}
    </AuthWrap>
  );
};

export default AuthNav;
