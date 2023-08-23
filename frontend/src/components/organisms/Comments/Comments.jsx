import React from 'react';
import './Comments.scss';
import Comment from '../../molecule/Comment/Comment';
import { Link } from 'react-router-dom';

const Comments = (props) => {
  const { data, openComModal } = props;
  const allComments = data
    ? data.map((comment) => (
        <Comment
          key={comment.commentId}
          id={comment.commentId}
          userName={comment.userName}
          comment={comment.content}
          date={comment.commentDate}
        />
      ))
    : 'No Comments yet';

  return (
    <>
      <h4>Comments</h4>
      <div className="Comments">
        {allComments}
        <Link className="submitComment" to={null} onClick={openComModal}>
          Have a thought? Leave a comment now!
        </Link>
      </div>
    </>
  );
};

export default Comments;
