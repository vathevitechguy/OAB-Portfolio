import React from 'react';
import './About.scss';
import { AboutHeader } from '../components/organisms';
import { DUMMY_POST } from '../hooks/DummyPost';
import SkillBoard from '../components/molecule/SkillBoard/SkillBoard';

const About = () => {
  return (
    <div className="About">
      <AboutHeader />
      <div className="About_content">
        <h4>My Journey</h4>
        <p>{DUMMY_POST}</p>
      </div>
      <div className="About_skillboard">
        <h4>Skill Board</h4>
        <SkillBoard />
      </div>
    </div>
  );
};

export default About;
