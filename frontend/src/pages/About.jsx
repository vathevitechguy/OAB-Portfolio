import React from 'react';
import './About.scss';
import { AboutHeader } from '../components/organisms';
import SkillBoard from '../components/molecule/SkillBoard/SkillBoard';
import { useQuery } from '@apollo/client';
import { GET_ABOUT } from '../graphql';
import LoadingSpinner from '../components/molecule/LoadingSpinner/LoadingSpinner';
import Error from './Error';

const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error error="Something Went Wrong!" />;

  const attributes = data.about.data.attributes;

  return (
    <div className="About">
      <AboutHeader
        description={attributes.description}
        imgSrc={attributes.image.data.attributes.url}
      />
      <div className="About_content">
        <h4>My Journey</h4>
        <p>{attributes.biography}</p>
        {/* <ReactMarkdown>{attributes.biography}</ReactMarkdown> */}
      </div>
      <div className="About_skillboard">
        <h4>Skill Board</h4>
        <SkillBoard skills={attributes.skills} />
      </div>
    </div>
  );
};

export default About;
