import React, { useState } from 'react';
import './Gradient.scss';

const Gradient = (props) => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const offsetX = (e.nativeEvent.clientX / container.clientWidth - 0.5) * 50;
    const offsetY = (e.nativeEvent.clientY / container.clientHeight - 0.5) * 50;
    setRotation(offsetX);
    container.style.setProperty('--offset-x', `${offsetX}px`);
    container.style.setProperty('--offset-y', `${offsetY}px`);
  };
  return (
    <div className="background-container" onMouseMove={handleMouseMove}>
      <div
        className="background-image"
        style={{ '--rotation': `${rotation}deg` }}
      />
      {props.children}
    </div>
  );
};

export default Gradient;
