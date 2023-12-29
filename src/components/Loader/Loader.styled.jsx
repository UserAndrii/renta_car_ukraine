import styled from '@emotion/styled';

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingWrapper = styled.div`
  display: flex;
`;

export const Dot = styled.div`
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;
  background: ${props => props.color};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: wave 2s ease-out infinite;
    animation-delay: ${props => props.delay};
  }

  @keyframes wave {
    50%,
    75% {
      transform: scale(2.5);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`;
