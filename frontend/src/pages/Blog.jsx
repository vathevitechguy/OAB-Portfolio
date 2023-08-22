import React, { useEffect, useState } from 'react';
import './Blog.scss';
import { AllPosts, HeroStandard, WeeklyFeature } from '../components/organisms';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql';
import { refractorPosts } from '../graphql/helper';
export let allPosts;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const [postsData, setPostsData] = useState([]);
  allPosts = postsData;

  useEffect(() => {
    if (!loading && !error) {
      refractorPosts(data.posts.data, setPostsData);
    }
  }, [data, loading, error]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const getfeatured = postsData.map((post) => {
    if (post.featured === true)
      return (
        <WeeklyFeature
          key={post.id}
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
