import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  padding: 0 0 20px;

  font-size: 28px;
  line-height: 1.6;
  color: var(--main-text);
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 250px;
  height: 320px;
  padding: 20px;

  background: transparent;
  border: 2px solid rgba(225, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;
