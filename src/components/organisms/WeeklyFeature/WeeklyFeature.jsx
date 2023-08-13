import React from 'react';
import './WeeklyFeature.scss';
import { Link } from 'react-router-dom';

const WeeklyFeature = (props) => {
  const { title, date, postID } = props;
  return (
    <div className="WeeklyFeature" id="weekly-feature">
      <h4>Weekly Feature</h4>
      <Link to={`/personal-blog/${postID}`}>
        <div className="WeeklyFeature_wrapper">
          <h3>{title}</h3>
          <p>Tap to read</p>
          <div className="date">
            <p>
              Published on <i>{date}</i>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WeeklyFeature;
