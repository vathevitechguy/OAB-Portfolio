import React, { useEffect, useState } from 'react';
import './Blog.scss';
import { AllPosts, HeroStandard, WeeklyFeature } from '../components/organisms';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql';
import { refactorPosts } from '../graphql/helpers/refactorData';
import LoadingSpinner from '../components/molecule/LoadingSpinner/LoadingSpinner';
import Error from './Error';

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      refactorPosts(data.posts.data, setPostsData);
    }
  }, [data, loading, error]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error error="Something Went Wrong!" />;
  const getfeatured = postsData.map((post) => {
    return (
      post.featured === true && (
        <WeeklyFeature
          key={post.id}
          postID={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
          imgSrc={post.imgSrc}
        />
      )
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
