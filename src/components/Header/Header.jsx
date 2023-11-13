import React from 'react';

import {
  Container,
  Content,
  Logo,
  SpanLogo,
  Nav,
  List,
  Item,
} from './Header.styled';
import AuthNav from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsAdmin, selectIsLogged } from 'redux/auth/selectors';

const Header = () => {
  const isLogged = useSelector(selectIsLogged);
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <Container>
      <Content>
        <Logo>
          <SpanLogo>RENTA</SpanLogo>CAR
        </Logo>
        <Nav>
          <List>
            <li>
              <Item to="/">About us</Item>
            </li>
            <li>
              <Item to="/catalog">Cars Park</Item>
            </li>
            {isLogged && (
              <li>
                <Item to="/favorites">My favorite cars</Item>
              </li>
            )}
            {isAdmin && (
              <li>
                <Item to="/service">Administration</Item>
              </li>
            )}
          </List>
        </Nav>
        <AuthNav />
      </Content>
    </Container>
  );
};

export default Header;
