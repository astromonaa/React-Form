import { FC } from "react";
import { useActions } from "../../hooks/actions";
import { IModalProps } from "../../types/types";
import './modal.scss'

const Modal:FC<IModalProps> = ({children, className}) => {
  const {setShowModal} = useActions()
  return (
    <div className={`modal-wrapper ${className}`}>
      <div className="modal-content">
        <div className="modal-close" onClick={() => setShowModal(false)}>&times;</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;