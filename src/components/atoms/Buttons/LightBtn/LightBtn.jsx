import React from 'react';
import './LightBtn.scss';

const LightBtn = (props) => {
  return (
    <button type="button" className="light-btn" onClick={props.onClick}>
      {props.nameTag}
      <span className="light-btn_icon">
        <img src={props.iconSrc} alt={props.altText} />
      </span>
    </button>
  );
};

export default LightBtn;
