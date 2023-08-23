import React, { useEffect, useState } from 'react';
import './Modal.scss';
import { DarkBtn } from '../../atoms/Buttons/Buttons';
import Close from '../../../assets/icons/close.png';

const Modal = (props) => {
  const { type, isOpen, onClose, onSubmit } = props;
  const [modalType, setModalType] = useState({
    title: '',
    textLabel: '',
    buttonText: '',
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (type === 'contact') {
      setModalType({
        title: 'Send Oluwadare a message!',
        textLabel: 'Message',
        buttonText: 'Submit',
      });
    } else if (type === 'comment') {
      setModalType({
        title: 'Leave a comment',
        textLabel: 'Comment',
        buttonText: 'Post Comment',
      });
    }
  }, [type]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('Modal')) {
      onClose();
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the formData to the onSubmit callback
    onSubmit(formData);
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
          <form onSubmit={handleSubmit}>
            <div className="form_name">
              <label>Full Name</label>
              <input
                type="text"
                maxLength={256}
                name="fullName"
                value={formData.fullName}
                placeholder="Enter your full name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form_email">
              <label>Email Address</label>
              <input
                type="email"
                maxLength={256}
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form_message">
              <label>{modalType.textLabel}</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <DarkBtn type="submit" title={modalType.buttonText} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
