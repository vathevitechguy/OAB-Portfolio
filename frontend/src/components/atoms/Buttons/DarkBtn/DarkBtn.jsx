import React from 'react';
import './DarkBtn.scss';
const DarkBtn = (props) => {
  return (
    <button type={props.type} className="dark-btn" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default DarkBtn;
