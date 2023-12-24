import { useDispatch, useSelector } from 'react-redux';

import { selectUserName } from 'redux/auth/selectors';
import { userLogOut } from 'redux/auth/operations';

import { LogOutBtn, Name } from './UserInfo.styled';

const UserInfo = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <>
      <Name>Hi, {userName}!</Name>
      <LogOutBtn
        type="button"
        onClick={() => {
          dispatch(userLogOut());
          toggleMenu();
        }}
      >
        Log Out
      </LogOutBtn>
    </>
  );
};

export default UserInfo;