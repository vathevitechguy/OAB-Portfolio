import React from 'react';
import './SkillBoard.scss';
import Skill from '../../atoms/Skill/Skill';

const DUMMY_Skills = [
  { id: 'sk1', skillName: 'Data Science' },
  { id: 'sk2', skillName: 'Web Development' },
  { id: 'sk3', skillName: 'Mobile App Development' },
  { id: 'sk4', skillName: 'UI/UX Design' },
  { id: 'sk5', skillName: 'Content Writing' },
  { id: 'sk6', skillName: 'Digital Marketing' },
  { id: 'sk7', skillName: 'Project Management' },
  { id: 'sk8', skillName: 'Machine Learning' },
  { id: 'sk9', skillName: 'Blockchain Development' },
  { id: 'sk10', skillName: 'Video Editing' },
  { id: 'sk11', skillName: 'Graphic Design' },
  { id: 'sk12', skillName: 'Photography' },
  { id: 'sk13', skillName: 'Social Media Management' },
  { id: 'sk14', skillName: 'Database Management' },
  { id: 'sk15', skillName: 'Copywriting' },
  { id: 'sk16', skillName: 'SEO Optimization' },
  { id: 'sk17', skillName: 'Data Analysis' },
  { id: 'sk18', skillName: 'Network Administration' },
  { id: 'sk19', skillName: 'E-commerce Development' },
  { id: 'sk20', skillName: 'Frontend Frameworks (React, Vue, Angular)' },
];

const SkillBoard = () => {
  const skillBoard = DUMMY_Skills.map((skill) => {
    return <Skill key={skill.id} id={skill.id} skillName={skill.skillName} />;
  });
  return <div className="Skillboard">{skillBoard}</div>;
};

export default SkillBoard;
