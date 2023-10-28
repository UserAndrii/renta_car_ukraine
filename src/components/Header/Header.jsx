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
import { selectIsLogged } from 'redux/auth/selectors';

const Header = () => {
  const isLogged = useSelector(selectIsLogged);

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
          </List>
        </Nav>
        <AuthNav />
      </Content>
    </Container>
  );
};

export default Header;
