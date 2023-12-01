import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  min-height: 100px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: var(--accent);
  padding: 20px;
  text-align: center;
`;

export const IconList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled.a`
  padding: 10px;
  color: var(--btn-text);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--second-accent);
  }
`;

export const Copyright = styled.p`
  color: var(--btn-text);
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: 1.2;
  }
`;
