import React from 'react';
import './Blog.scss';
import { HeroStandard, WeeklyFeature } from '../components/organisms';

const Blog = () => {
  return (
    <div className="Blog">
      <HeroStandard />
      <WeeklyFeature
        title="How is AI Impacting Human Intelligence? My View."
        date="March 06, 2023"
      />
    </div>
  );
};

export default Blog;
