import React from 'react';
import './SkillBoard.scss';
import Skill from '../../atoms/Skill/Skill';

const SkillBoard = (props) => {
  const { skills } = props;
  const skillBoard = skills.map((skill) => {
    return <Skill key={skill.id} id={skill.id} skillName={skill.skillName} />;
  });
  return <div className="Skillboard">{skillBoard}</div>;
};

export default SkillBoard;
