import React from 'react';
import './AboutHeader.scss';

const AboutHeader = (props) => {
  const { imgSrc, description } = props;
  return (
    <div className="AboutHeader">
      <div className="AboutHeader_img">
        <img src={`http://localhost:1337${imgSrc}`} alt="Oluwadare Badejo" />
      </div>
      <div className="AboutHeader_desc">
        <h3>Hi there!</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutHeader;
