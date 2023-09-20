import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  display: block;
  color: var(--accent);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  margin: 0 auto;
  padding-bottom: 150px;
  cursor: pointer;

  border: none;
  background-color: inherit;

  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--hover);
  }
`;
