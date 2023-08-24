import { useMutation } from '@apollo/client';
import { createHandler } from '../graphql/helpers/createHandler';
import { SEND_MESSAGE } from '../graphql';

const useSendMessage = () => {
  const [
    createMessage,
    { loading: loadingMutation, error: errorMutation, data },
  ] = useMutation(SEND_MESSAGE);

  const sendMessageHandler = async (messageVariables) => {
    await createHandler(createMessage, messageVariables);
  };

  return { sendMessageHandler, loadingMutation, errorMutation, data };
};

export default useSendMessage;
