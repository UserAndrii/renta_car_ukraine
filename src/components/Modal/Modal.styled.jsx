import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 60px 0;
  overflow: auto;

  background-color: rgba(18, 20, 23, 0.5);
  z-index: 999;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: var(--btn-text);

  width: 290px;
  height: fit-content;
  padding: 15px;
  overflow: auto;

  .modal {
    opacity: 0;
    transition: opacity var(--transition);
  }

  .modal.open {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 541px;
    padding: 40px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: var(--btn-text);
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--hover);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
    color: var(--main-text);
  }
`;
