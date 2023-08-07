import React from 'react';
import './LightBtn.scss';
import ArrowRight from '../../../../assets/icons/arrow-right.svg';

const LightBtn = (props) => {
  return (
    <button type="button" className="light-btn">
      {props.children}{' '}
      <span className="light-btn_icon">
        <img src={ArrowRight} alt="arrow_right" />
      </span>
    </button>
  );
};

export default LightBtn;
