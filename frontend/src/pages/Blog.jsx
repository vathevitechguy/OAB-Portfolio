import React from 'react';
import './Blog.scss';
import { AllPosts, HeroStandard, WeeklyFeature } from '../components/organisms';
import { Outlet } from 'react-router-dom';

const Blog = () => {
  // const [viewPost, setViewPost] = useState(null);
  return (
    <div className="Blog">
      <HeroStandard />
      <WeeklyFeature
        title="How is AI Impacting Human Intelligence? My View."
        date="March 06, 2023"
        postID="8dncrdrt70ps"
      />
      <AllPosts />
      {/* <Outlet /> */}
    </div>
  );
};

export default Blog;
