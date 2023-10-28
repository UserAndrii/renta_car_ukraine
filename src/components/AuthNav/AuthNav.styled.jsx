import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled(NavLink)`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;

  color: var(--btn-text);
  transition: color var(--transition);

  padding: 12px 12px;
  border-radius: 12px;
  background: var(--hover);

  :active {
    color: var(--second-accent);
  }

  :hover,
  :focus {
    color: var(--second-accent);
  }
`;
