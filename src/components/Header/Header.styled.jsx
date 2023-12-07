import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;

  background-color: var(--accent);
  border-bottom: 1px solid #ddddde;
  z-index: 99;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    height: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 110px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 21px;
  line-height: 1.6;

  color: var(--btn-text);

  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const SpanLogo = styled.span`
  color: var(--second-accent);
`;

export const Nav = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  gap: 5px;

  @media screen and (min-width: 1440px) {
    gap: 30px;
  }
`;

export const Item = styled(NavLink)`
  color: var(--btn-text);

  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  transition: color var(--transition);
  padding: 8px 8px;

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    padding: 10px 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
    padding: 12px 12px;
  }

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
