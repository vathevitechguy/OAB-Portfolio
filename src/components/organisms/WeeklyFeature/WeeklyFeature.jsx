import React from 'react';
import './WeeklyFeature.scss';

const WeeklyFeature = (props) => {
  const { title, date } = props;
  return (
    <div className="WeeklyFeature" id="weekly-feature">
      <h4>Weekly Feature</h4>
      <div className="WeeklyFeature_wrapper">
        <h3>{title}</h3>
        <p>Tap to read</p>
        <div className="date">
          <p>
            Published on <i>{date}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyFeature;
