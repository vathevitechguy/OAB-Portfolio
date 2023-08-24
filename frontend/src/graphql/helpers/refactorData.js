export const refactorPosts = (data, setState) => {
  const newPostData = data.map((datum) => {
    const {
      postID,
      title,
      author,
      content,
      image,
      publishedAt,
      post_categories,
      featured,
      comments,
    } = datum.attributes;

    return {
      id: postID,
      strapiId: datum.id,
      title: title,
      author,
      content,
      imgSrc: image.data.attributes.url,
      category:
        post_categories.data.length > 0
          ? post_categories.data[0].attributes.name
          : 'No Category',
      date: new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      featured: featured,
      comments:
        comments?.data.length > 0 &&
        comments?.data.map((comment) => {
          const { commentId, userName, content, publishedAt } =
            comment.attributes;
          return {
            commentId,
            userName,
            content,
            commentDate: new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          };
        }),
    };
  });
  setState(newPostData);
};
