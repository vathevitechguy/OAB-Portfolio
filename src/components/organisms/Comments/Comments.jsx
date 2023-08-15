import React from 'react';
import './Comments.scss';
import Comment from '../../molecule/Comment/Comment';
import { Link } from 'react-router-dom';

const Comments = () => {
  return (
    <>
      <h4>Comments</h4>
      <div className="Comments">
        <Comment />
        <Comment />
        <Link className="submitComment" to={null}>
          Have a thought? Leave a comment now!
        </Link>
      </div>
    </>
  );
};

export default Comments;
