import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { Overlay, ModalWindow, Button } from './Modal.styled';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, onClose, isOpenModal }) => {
  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleESC);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleESC);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow className={`modal ${isOpenModal ? 'open' : ''}`}>
        <Button
          type="button"
          aria-label="Close Button"
          onClick={() => onClose()}
        >
          <AiOutlineClose size={24} />
        </Button>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
