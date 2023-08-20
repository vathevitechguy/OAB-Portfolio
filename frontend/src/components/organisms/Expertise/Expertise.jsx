import React from 'react';
import './Expertise.scss';
import ExpertiseList from '../../molecule/ExpertiseList/ExpertiseList';

const Expertise = (props) => {
  const { data } = props;
  const expertiseData = data.map((datum) => {
    return (
      <ExpertiseList
        key={datum.id}
        id={datum.id}
        number={datum.number}
        title={datum.title}
        content={datum.content}
      />
    );
  });
  return (
    <div className="Expertise">
      <div className="Expertise_wrapper">
        <h4>Expertise</h4>
        {expertiseData}
      </div>
    </div>
  );
};

export default Expertise;
