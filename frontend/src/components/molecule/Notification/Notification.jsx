import React, { useState, useEffect } from 'react';
import './Notification.scss';

const Notification = ({ message, onClose }) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={`notification ${showNotification ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
};

export default Notification;
