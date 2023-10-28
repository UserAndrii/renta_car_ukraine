import { useSelector } from 'react-redux';
import { AuthWrap, Links } from './AuthNav.styled';
import { selectIsLogged } from 'redux/auth/selectors';
import UserInfo from 'components/UserInfo';

const AuthNav = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <AuthWrap>
      {isLogged ? (
        <UserInfo />
      ) : (
        <>
          <Links to="/login" style={{ marginRight: 10 }}>
            Log In
          </Links>
          <Links to="/register">Sign Up</Links>
        </>
      )}
    </AuthWrap>
  );
};

export default AuthNav;
