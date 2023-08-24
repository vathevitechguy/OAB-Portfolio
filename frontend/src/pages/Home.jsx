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
import LoadingSpinner from '../components/molecule/LoadingSpinner/LoadingSpinner';
export let resumeData;

const Home = (props) => {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return <LoadingSpinner />;
  if (error) return `Error! ${error.message}`;

  const attributes = data.home.data.attributes;
  resumeData = attributes.resume.data;

  return (
    <div className="Home">
      <HeroWithMedia
        heroDescription={attributes.heroDescription}
        openModal={props.openModal}
      />
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
