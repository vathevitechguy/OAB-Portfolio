import React from 'react';
import './DarkBtn.scss';
const DarkBtn = (props) => {
  return (
    <button type="button" className="dark-btn">
      {props.title}
    </button>
  );
};

export default DarkBtn;
