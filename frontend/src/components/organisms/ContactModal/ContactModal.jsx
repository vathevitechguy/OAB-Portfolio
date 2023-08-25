import React from 'react';
import useSendMessage from '../../../hooks/useSendMessage';
import Modal from '../Modal/Modal';

const ContactModal = (props) => {
  const { modalState, onCloseModal, notification } = props;
  const { sendMessageHandler, loadingMutation, errorMutation } =
    useSendMessage();

  const onMessageSubmitHandler = async (formData) => {
    const { fullName, email, message } = formData;
    const messageVariables = {
      fullname: fullName,
      email,
      message,
      publishedAt: new Date().toISOString(),
    };
    await sendMessageHandler(messageVariables);
    if (!loadingMutation && !errorMutation) {
      onCloseModal();
      notification({
        status: 'success',
        message: 'Message sent! Check email for confirmation.',
      });
    }
  };

  return (
    <>
      <Modal
        type="contact"
        isOpen={modalState}
        onClose={onCloseModal}
        onSubmit={onMessageSubmitHandler}
        loading={{ loadingMutation, errorMutation }}
      />
    </>
  );
};

export default ContactModal;
