import React from 'react';
import './Expertise.scss';
import ExpertiseList from '../../molecule/ExpertiseList/ExpertiseList';

const DUMMY_EXPERTISE = [
  {
    id: Math.random().toFixed,
    number: '01',
    title: 'Data Science',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: Math.random().toFixed,
    number: '02',
    title: 'Product Management',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: Math.random().toFixed,
    number: '03',
    title: 'Artificial Int.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Expertise = () => {
  const expertiseData = DUMMY_EXPERTISE.map((datum) => {
    return (
      <ExpertiseList
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
