import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & span {
    color: var(--accent);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;

    padding: 0 0.4em;
    animation: anim 2s infinite ease-in-out;
    filter: blur(6px);

    :nth-of-type(1) {
      animation-delay: -1s;
    }
    :nth-of-type(2) {
      animation-delay: -0.9s;
    }
    :nth-of-type(3) {
      animation-delay: -0.8s;
    }
    :nth-of-type(4) {
      animation-delay: -0.7s;
    }
    :nth-of-type(5) {
      animation-delay: -0.6s;
    }
    :nth-of-type(6) {
      animation-delay: -0.5s;
    }
    :nth-of-type(7) {
      animation-delay: -0.4s;
    }
    :nth-of-type(8) {
      animation-delay: -0.3s;
    }
    :nth-of-type(9) {
      animation-delay: -0.2s;
    }
    :nth-of-type(10) {
      animation-delay: -0.1s;
    }

    @media screen and (min-width: 768px) {
      font-size: 42px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 64px;
    }

    @keyframes anim {
      0% {
        filter: blur(6px);
      }

      50% {
        filter: blur(0px);
      }

      100% {
        filter: blur(6px);
      }
    }
  }
`;
