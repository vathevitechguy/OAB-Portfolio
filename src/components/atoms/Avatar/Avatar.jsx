import React from 'react';
import './Avatar.scss';

const Avatar = (props) => {
  const getRandomColor = () => {
    // const colors = ['#FF5733', '#33FF6E', '#339BFF', '#FF33C2', '#FFD633'];
    // const randomIndex = Math.floor(Math.random() * colors.length);
    // return colors[randomIndex];
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const initials = props.initials;
  return (
    <div
      className="UserAvatar"
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <p>{initials}</p>
    </div>
  );
};

export default Avatar;
