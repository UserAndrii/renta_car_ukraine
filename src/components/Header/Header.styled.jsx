import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaViber, FaTelegram } from 'react-icons/fa';

export const Container = styled.header`
  width: 100%;
  background-color: #3470ff;
  padding: 18px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.6;

  color: #ffffff;
`;

export const SpanLogo = styled.span`
  color: #fec100;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  gap: 80px;
`;

export const Item = styled(Link)`
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fec100;
  }
`;

export const Networks = styled.ul`
  display: flex;
  gap: 18px;
  color: #ffffff;
`;

export const LinkNetwork = styled.a`
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fec100;
  }
`;

export const IconLinkedin = styled(AiFillLinkedin)`
  width: 30px;
  height: 30px;
  color: inherit;
`;

export const IconViber = styled(FaViber)`
  width: 30px;
  height: 30px;
  color: inherit;
`;

export const IconTelegram = styled(FaTelegram)`
  width: 30px;
  height: 30px;
  color: inherit;
`;
