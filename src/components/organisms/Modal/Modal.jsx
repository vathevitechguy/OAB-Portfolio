import React from 'react';
import './Modal.scss';
import { DarkBtn } from '../../atoms/Buttons/Buttons';
import Close from '../../../assets/icons/close.png';

const Modal = (props) => {
  const { title } = props;
  return (
    <div className="Modal">
      <div className="Modal_content">
        <img src={Close} alt="close" />
        <div className="Modal_container">
          <h6>{title}</h6>
          <form>
            <div className="form_name">
              <label>Name</label>
              <input
                type="text"
                maxLength={256}
                placeholder="Enter your name"
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
              <label>Message</label>
              <textarea rows="4" />
            </div>
            <DarkBtn title="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
