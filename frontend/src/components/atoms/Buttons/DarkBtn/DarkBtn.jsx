import React from 'react';
import './DarkBtn.scss';
const DarkBtn = (props) => {
  return (
    <button type={props.type} className="dark-btn">
      {props.title}
    </button>
  );
};

export default DarkBtn;
