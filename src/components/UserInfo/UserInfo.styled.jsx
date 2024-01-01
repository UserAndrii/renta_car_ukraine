import styled from '@emotion/styled';

export const Name = styled.p`
  position: relative;
  display: inline-block;
  color: var(--btn-text);

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--btn-text);
    transition: background-color var(--transition);
  }

  &:hover::before {
    background-color: var(--second-accent);
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
  }
`;

export const LogOutBtn = styled.button`
  color: var(--btn-text);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  cursor: pointer;

  padding: 8px 8px;
  margin-left: 15px;

  border: none;
  border-radius: 12px;
  background: var(--hover);
  transition: color var(--transition);

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    padding: 10px 10px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
    padding: 12px 12px;
  }

  :hover,
  :focus {
    color: var(--second-accent);
  }
`;
