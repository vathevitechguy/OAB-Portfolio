import React from 'react';
import './Resume.scss';
import AdobeInline from '../../molecule/AdobleInline/AdobeInline';

const Resume = () => {
  return (
    <div className="Resume">
      <h4>Resume/CV</h4>
      <p>Learn more about my education history and experiences.</p>
      <div className="Resume_wrapper">
        <AdobeInline />
      </div>
    </div>
  );
};

export default Resume;
