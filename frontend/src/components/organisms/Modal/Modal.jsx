import React, { useState, useEffect } from 'react';
import './Modal.scss';
import { DarkBtn } from '../../atoms/Buttons/Buttons';
import Close from '../../../assets/icons/close.png';
import LoadingSpinner from '../../molecule/LoadingSpinner/LoadingSpinner';

const Modal = (props) => {
  const { type, isOpen, onClose, onSubmit, loading } = props;
  const [modalType, setModalType] = useState({});
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.fullName) {
      isValid = false;
      errors.fullName = 'Full name is required';
    } else {
      const fullNameWords = formData.fullName.trim().split(' ');
      if (fullNameWords.length !== 2) {
        isValid = false;
        errors.fullName = 'First & last name are required';
      }
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }

    if (!formData.message) {
      isValid = false;
      errors.message = `${modalType.textLabel} is required`;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      // if (!loading?.loadingMutation) onClose();
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
          {loading?.loadingMutation ? (
            <LoadingSpinner cS={{ height: '100%' }} />
          ) : (
            <>
              <h6>{modalType.title}</h6>

              <form onSubmit={handleSubmit}>
                <div className="form_name">
                  <label>Full Name</label>
                  <input
                    type="text"
                    maxLength={256}
                    name="fullName"
                    value={formData.fullName || ''}
                    placeholder="Enter your full name"
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{formErrors.fullName}</div>
                </div>
                <div className="form_email">
                  <label>Email Address</label>
                  <input
                    type="email"
                    maxLength={256}
                    name="email"
                    value={formData.email || ''}
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{formErrors.email}</div>
                </div>
                <div className="form_message">
                  <label>{modalType.textLabel}</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message || ''}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{formErrors.message}</div>
                </div>
                <DarkBtn type="submit" title={modalType.buttonText} />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
