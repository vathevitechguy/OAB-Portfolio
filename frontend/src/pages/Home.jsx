import React from 'react';
import './Home.scss';
import {
  Expertise,
  HeroWithMedia,
  MyWork,
  Resume,
} from '../components/organisms';
import { GET_HOME_DATA } from '../graphql';
import { useQuery } from '@apollo/client';
export let resumeData;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const attributes = data.home.data.attributes;
  resumeData = attributes.resume.data;

  return (
    <div className="Home">
      <HeroWithMedia heroDescription={attributes.heroDescription} />
      <div className="intro">
        <p>{attributes.introText}</p>
      </div>
      <Expertise data={attributes.expertise} />
      <MyWork />
      <Resume data={attributes.resume.data.attributes} />
    </div>
  );
};

export default Home;
