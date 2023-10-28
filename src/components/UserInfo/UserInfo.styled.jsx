import styled from '@emotion/styled';

export const Name = styled.p`
  color: var(--btn-text);

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 22px;
    line-height: 1.2;
  }
`;

export const LogOutBtn = styled.button`
  color: var(--btn-text);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  cursor: pointer;

  padding: 12px 12px;
  margin-left: 15px;

  border: none;
  border-radius: 12px;
  background: var(--hover);
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--second-accent);
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.2;
  }
`;
