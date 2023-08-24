import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../graphql';
import { createHandler } from '../graphql/helpers/createHandler';

const useCreateCommentMutation = () => {
  const [
    createComment,
    { loading: loadingMutation, error: errorMutation, data },
  ] = useMutation(CREATE_COMMENT);

  const createCommentHandler = async (commentVariables) => {
    await createHandler(createComment, commentVariables);
  };

  return { createCommentHandler, loadingMutation, errorMutation, data };
};

export default useCreateCommentMutation;
