import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../graphql';

const useCreateCommentMutation = () => {
  const [
    createComment,
    { loading: loadingMutation, error: errorMutation, data },
  ] = useMutation(CREATE_COMMENT);

  const createCommentHandler = async (commentVariables) => {
    try {
      await createComment({
        variables: commentVariables,
      });
    } catch (error) {
      console.error('Error creating comment:', error.message);
    }
  };

  return { createCommentHandler, loadingMutation, errorMutation, data };
};

export default useCreateCommentMutation;
