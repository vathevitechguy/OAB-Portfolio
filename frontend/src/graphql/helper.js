export const refractorPosts = (data, state) => {
  const newPostData = data.map((datum) => {
    const { postID, title, image, publishedAt, post_categories, featured } =
      datum.attributes;
    return {
      id: postID,
      title: title,
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
    };
  });
  state(newPostData);
};
