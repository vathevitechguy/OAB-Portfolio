export const createHandler = async (mutationAction, entryVariables) => {
  try {
    await mutationAction({
      variables: entryVariables,
    });
  } catch (error) {
    console.error('Error creating entry:', error.message);
  }
};
