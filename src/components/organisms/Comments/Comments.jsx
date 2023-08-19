import React from 'react';
import './Comments.scss';
import Comment from '../../molecule/Comment/Comment';
import { Link } from 'react-router-dom';

const Comments = (props) => {
  return (
    <>
      <h4>Comments</h4>
      <div className="Comments">
        <Comment
          id="c1"
          userName="Oamen Johnson"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercita."
          date="Feb. 6, 2019"
        />
        <Comment
          id="c2"
          userName="Victor Aromose"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercita."
          date="Nov. 6, 2019"
        />
        <Link className="submitComment" to={null} onClick={props.openComModal}>
          Have a thought? Leave a comment now!
        </Link>
      </div>
    </>
  );
};

export default Comments;
