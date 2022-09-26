// Tasks :
// 1.Верстка мобилка, планшет, десктоп
// 2.При клике вне модалки закрывать её снимать слушатели событий при закрытии модалки
// 3.Реализовать закрытие модалки по нажатию на "Escape"
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className="container">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
