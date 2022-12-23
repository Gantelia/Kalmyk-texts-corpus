import { ReactNode } from 'react';
import './modal.scss';

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
};

function Modal({ children, onClick }: ModalProps) {
  return (
    <section className="modal">
      <p className="modal__message">{children}</p>
      <button className="modal__button button" type="button" onClick={onClick}>
        <span className="modal__acception">Ок</span>
      </button>
    </section>
  );
}

export default Modal;
