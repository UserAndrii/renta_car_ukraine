import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  padding: 20px 20px;
  width: 100%;
  height: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 128px 50px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 21px;
  line-height: 1.6;

  color: var(--accent);

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

export const Imges = styled.img`
  margin: 0 auto;
`;

export const TextVerify = styled.p`
  margin: 0 auto;
  color: var(--main-text);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const StyledButton = styled(Link)`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;

  min-width: 280px;
  height: 50px;
  padding: 12px 16px;
  cursor: pointer;

  border: none;
  border-radius: 12px;
  background: var(--accent);
  color: var(--btn-text);
  transition: background var(--transition);

  :hover {
    background: var(--hover);
  }

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }
`;
