import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  background-color: #fff;

  width: 541px;
  padding: 40px;

  .modal {
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  color: #121417;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0b44cd;
  }
`;
