import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 50px 128px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }
`;

export const Text = styled.p`
  color: var(--main-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
`;

export const CatalogLink = styled(Link)`
  color: var(--accent);
  text-decoration: underline;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--hover);
  }
`;

export const CallLink = styled.a`
  color: var(--accent);
  text-decoration: underline;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--hover);
  }
`;

export const Imeges = styled.img`
  width: 300px;
  border-radius: 14px;
`;
