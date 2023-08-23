import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '..';

const useCreateCommentMutation = () => {
  const [createComment, { loading, error, data }] = useMutation(CREATE_COMMENT);

  const createCommentHandler = async (commentVariables) => {
    try {
      const result = await createComment({
        variables: commentVariables,
      });

      console.log(
        'Comment created:',
        result.data.createComment.data.attributes
      );
    } catch (error) {
      console.error('Error creating comment:', error.message);
    }
  };

  return { createCommentHandler, loading, error, data };
};

export default useCreateCommentMutation;
