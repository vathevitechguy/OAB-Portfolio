import React, { useEffect, useState } from 'react';
import './Modal.scss';
import { DarkBtn } from '../../atoms/Buttons/Buttons';
import Close from '../../../assets/icons/close.png';

const Modal = (props) => {
  const { type, isOpen, onClose } = props;
  const [modalType, setModalType] = useState({
    title: '',
    textLabel: '',
    buttonText: '',
  });

  useEffect(() => {
    if (type === 'contact') {
      setModalType({
        title: 'Send Oluwadare a message!',
        textLabel: 'Message',
        buttonText: 'Submit',
      });
    } else if (type === 'comment')
      setModalType({
        title: 'Leave a comment',
        textLabel: 'Comment',
        buttonText: 'Post Comment',
      });
  }, [type]);
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('Modal')) {
      onClose();
    }
  };

  return (
    <div
      className={`Modal ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="Modal_content">
        <img src={Close} alt="close" onClick={onClose} />
        <div className="Modal_container">
          <h6>{modalType.title}</h6>
          <form>
            <div className="form_name">
              <label>Full Name</label>
              <input
                type="text"
                maxLength={256}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form_email">
              <label>Email Address</label>
              <input
                type="email"
                maxLength={256}
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form_message">
              <label>{modalType.textLabel}</label>
              <textarea rows="4" />
            </div>
            <DarkBtn title={modalType.buttonText} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
