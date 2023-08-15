import React from 'react';
import './Comment.scss';
import { Avatar } from '../../atoms';

const Comment = (props) => {
  const { id, userName, comment, date } = props;

  const initials = () => {
    return userName
      .split(' ')
      .map((letter) => letter.charAt(0).toUpperCase())
      .join(''); // You were missing the join() function here
  };

  return (
    <div className="Comment">
      <Avatar initials={initials()} />
      <div className="Comment_data">
        <div className="userName">{userName}</div>
        <p>{comment}</p>
      </div>
      <span className="date">{date}</span>
    </div>
  );
};

export default Comment;
