import { useDispatch, useSelector } from 'react-redux';

import { selectUserName } from 'redux/auth/selectors';
import { userLogOut } from 'redux/auth/operations';

import { LogOutBtn, Name } from './UserInfo.styled';
import { Link } from 'react-router-dom';

const UserInfo = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <>
      <Link
        to="/profile"
        onClick={() => {
          if (toggleMenu && typeof toggleMenu === 'function') {
            toggleMenu();
          }
        }}
      >
        <Name>Hi, {userName}!</Name>
      </Link>

      <LogOutBtn
        type="button"
        onClick={() => {
          dispatch(userLogOut());
          if (toggleMenu && typeof toggleMenu === 'function') {
            toggleMenu();
          }
        }}
      >
        Log Out
      </LogOutBtn>
    </>
  );
};

export default UserInfo;
