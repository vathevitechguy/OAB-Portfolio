import React from 'react';
import './Skill.scss';

const Skill = (props) => {
  const { id, skillName } = props;
  return (
    <div id={id} className="Skill">
      {skillName}
    </div>
  );
};

export default Skill;
