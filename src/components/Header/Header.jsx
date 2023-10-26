import React from 'react';

import {
  Container,
  Content,
  Logo,
  SpanLogo,
  Nav,
  List,
  Item,
  AuthList,
} from './Header.styled';

const Header = () => {
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
            <li>
              <Item to="/favorites">Your favorite cars</Item>
            </li>
          </List>
        </Nav>
        <AuthList></AuthList>
      </Content>
    </Container>
  );
};

export default Header;
