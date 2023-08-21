import React from 'react';
import './WeeklyFeature.scss';
import { Link } from 'react-router-dom';

const WeeklyFeature = (props) => {
  const { title, date, postID, imgSrc } = props;
  console.log(imgSrc);

  const wrapperStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('http://localhost:1337${imgSrc}'), lightgray 50% / cover no-repeat`,
  };

  return (
    <div className="WeeklyFeature" id="weekly-feature">
      <h4>Weekly Feature</h4>
      <Link to={`/personal-blog/${postID}`}>
        <div className="WeeklyFeature_wrapper" style={wrapperStyle}>
          <h3>{title}</h3>
          <p>Tap to read</p>
          <div className="date">
            <p>Published on {date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WeeklyFeature;
