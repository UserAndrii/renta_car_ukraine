import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Links = styled(NavLink)`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;

  color: var(--btn-text);
  transition: color var(--transition);

  padding: 8px 8px;
  border-radius: 12px;
  background: var(--hover);

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    padding: 10px 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
    padding: 12px 12px;
  }

  :active {
    color: var(--second-accent);
  }

  :hover,
  :focus {
    color: var(--second-accent);
  }
`;
