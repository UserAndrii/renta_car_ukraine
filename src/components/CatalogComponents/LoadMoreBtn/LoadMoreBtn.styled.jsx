import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  display: block;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  margin: 0 auto;
  padding-bottom: 150px;
  cursor: pointer;

  border: none;
  background-color: inherit;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0b44cd;
  }
`;
