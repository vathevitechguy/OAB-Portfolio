import React from 'react';
import './AboutHeader.scss';
import DarePass from '../../../assets/DarePass.png';

const AboutHeader = () => {
  return (
    <div className="AboutHeader">
      <div className="AboutHeader_img">
        <img src={DarePass} alt="Oluwadare Badejo" />
      </div>
      <div className="AboutHeader_desc">
        <h3>Hi there!</h3>
        <p>
          Driven by people for data and creating lorem ipsum interactions, I
          have a evolved to becoming my projection and continuously improve in
          my work. Learn more about my journey below.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
