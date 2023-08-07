import React from 'react';
import './DarkBtn.scss';
const DarkBtn = (props) => {
  return (
    <button type="button" className="dark-btn">
      {props.children}
    </button>
  );
};

export default DarkBtn;
