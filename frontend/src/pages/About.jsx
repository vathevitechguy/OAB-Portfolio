import React from 'react';
import './About.scss';
import { AboutHeader } from '../components/organisms';
import { DUMMY_POST } from '../hooks/DummyPost';
import SkillBoard from '../components/molecule/SkillBoard/SkillBoard';
import { gql, useQuery } from '@apollo/client';
const getAbout = gql`
  query {
    about {
      data {
        id
        attributes {
          description
          biography
          skills
        }
      }
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(getAbout);
  console.log(data);
  // const { imgage, description, skills } = data.about.data.attributes;
  return (
    <div className="About">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <AboutHeader description={data.about.data.attributes.description} />
          <div className="About_content">
            <h4>My Journey</h4>
            <p>{data.about.data.attributes.biography}</p>
          </div>
          <div className="About_skillboard">
            <h4>Skill Board</h4>
            <SkillBoard skills={data.about.data.attributes.skills} />
          </div>
        </>
      )}
    </div>
  );
};

export default About;
