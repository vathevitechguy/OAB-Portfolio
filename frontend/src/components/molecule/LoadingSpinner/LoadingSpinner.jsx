import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = (props) => {
  return (
    <div className="loader-container" style={props.cS}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
