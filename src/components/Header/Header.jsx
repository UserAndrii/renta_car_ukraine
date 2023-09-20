import React from 'react';

import {
  Container,
  Content,
  Logo,
  SpanLogo,
  Nav,
  List,
  Networks,
  LinkNetwork,
  Item,
  IconLinkedin,
  IconViber,
  IconTelegram,
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
        <Networks>
          <li>
            <LinkNetwork
              href="https://www.linkedin.com/in/andrii-hadar/"
              target="_blank"
            >
              <IconLinkedin />
            </LinkNetwork>
          </li>
          <li>
            <LinkNetwork href="viber://chat?number=+380730000000">
              <IconViber />
            </LinkNetwork>
          </li>
          <li>
            <LinkNetwork href="tg://resolve?domain=andrii_hadar">
              <IconTelegram />
            </LinkNetwork>
          </li>
        </Networks>
      </Content>
    </Container>
  );
};

export default Header;
