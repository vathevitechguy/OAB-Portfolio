import React from 'react';
import './Comment.scss';
import { Avatar } from '../../atoms';

const Comment = () => {
  return (
    <div className="Comment">
      <Avatar initials="VA" />
      <div className="Comment_data">
        <div className="userName">Victor Aromose</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita.
        </p>
      </div>
      <span className="date">Feb. 06, 2023</span>
    </div>
  );
};

export default Comment;
