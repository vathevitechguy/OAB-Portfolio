import React, { useEffect, useState } from 'react';
import './Blog.scss';
import { AllPosts, HeroStandard, WeeklyFeature } from '../components/organisms';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql';

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      refractorPosts(data.posts.data);
    }
  }, [data, loading, error]);

  const refractorPosts = (data) => {
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
    setPostsData(newPostData);
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const getfeatured = postsData.map((post) => {
    if (post.featured === true)
      return (
        <WeeklyFeature
          postID={post.id}
          title={post.title}
          date={post.date}
          imgSrc={post.imgSrc}
        />
      );
  });

  return (
    <div className="Blog">
      <HeroStandard />
      {getfeatured}
      <AllPosts data={postsData} />
    </div>
  );
};

export default Blog;
