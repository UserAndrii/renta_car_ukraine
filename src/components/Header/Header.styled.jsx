import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaViber, FaTelegram } from 'react-icons/fa';

export const Container = styled.header`
  position: fixed;
  width: 1440px;
  height: 95px;
  background-color: var(--accent);
  padding: 18px 0;
  border-bottom: 1px solid #ddddde;
  z-index: 99;
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

  color: var(--btn-text);
`;

export const SpanLogo = styled.span`
  color: var(--second-accent);
`;

export const Nav = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  gap: 80px;
`;

export const Item = styled(NavLink)`
  color: var(--btn-text);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  transition: color var(--transition);
  padding: 12px 12px;

  &.active {
    border-radius: 12px;
    background: var(--hover);
    color: var(--btn-text);
  }

  :hover,
  :focus {
    color: var(--second-accent);
  }
`;

export const Networks = styled.ul`
  display: flex;
  gap: 18px;
  color: var(--btn-text);
`;

export const LinkNetwork = styled.a`
  color: var(--btn-text);
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--second-accent);
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
