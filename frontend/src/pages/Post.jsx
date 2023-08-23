import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Post.scss';
import ArrowPointingLeft from '../assets/icons/arrow-pointing-left.svg';
import DarePass from '../assets/DarePass.png';
import Comments from '../components/organisms/Comments/Comments';
import { Modal } from '../components/organisms';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_POSTID } from '../graphql';
import { refactorPosts } from '../graphql/helper';
import Error from './Error';

const Post = () => {
  const { postID } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_POSTID, {
    variables: {
      getPostID: postID,
    },
  });
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState([]);
  const [commentModal, setCommentModal] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      refactorPosts(data.posts.data, setCurrentPost);
    }
  }, [data, loading, error]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (currentPost.length === 0) return <Error />;
  const { id, title, content, author, imgSrc, date, comments } = currentPost[0];

  const commentModalHandler = () => {
    setCommentModal(true);
  };
  const closeCommentModal = () => {
    setCommentModal(false);
  };

  const headerStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('http://localhost:1337${imgSrc}'), lightgray 50% / cover no-repeat`,
  };

  return (
    <div className="Post">
      <div className="Post_wrapper">
        <Link className="go-back" onClick={() => navigate(-1)}>
          <img src={ArrowPointingLeft} alt="go-back" />
          <p>Go Back</p>
        </Link>
        <div className="Post_header" style={headerStyle}>
          <h2>{title}</h2>
          <div className="publisher-info">
            <div className="name">
              <img src={DarePass} alt="Oluwadare Badejo" />
              <p>{author}</p>
            </div>
            <p className="date">Published on {date}</p>
          </div>
        </div>
        <div className="Post_content">
          <p>{content}</p>
        </div>
        <Comments data={comments} openComModal={commentModalHandler} />
      </div>
      {commentModal && (
        <Modal
          type="comment"
          isOpen={commentModal}
          onClose={closeCommentModal}
        />
      )}
    </div>
  );
};

export default Post;
