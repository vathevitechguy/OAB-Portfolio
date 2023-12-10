import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Post.scss';
import ArrowPointingLeft from '../assets/icons/arrow-pointing-left.svg';
import DarePass from '../assets/DarePass.png';
import Comments from '../components/organisms/Comments/Comments';
import { Modal } from '../components/organisms';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_POSTID } from '../graphql';
import { refactorPosts } from '../graphql/helpers/refactorData';
import Error from './Error';
import useCreateCommentMutation from '../hooks/useCreateCommentMutation';
import LoadingSpinner from '../components/molecule/LoadingSpinner/LoadingSpinner';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Post = () => {
  const { postID } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_POST_BY_POSTID, {
    variables: {
      getPostID: postID,
    },
  });
  const { createCommentHandler, loadingMutation, errorMutation } =
    useCreateCommentMutation();

  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState([]);
  const [commentModal, setCommentModal] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      refactorPosts(data.posts.data, setCurrentPost);
    }
  }, [data, loading, error]);

  if (loading) return <LoadingSpinner />;
  if (error) return `Error! ${error.message}`;
  if (currentPost.length === 0) return <Error />;
  const { strapiId, title, content, author, imgSrc, date, comments } =
    currentPost[0];

  // Create Comment Handlers starts
  const commentModalHandler = () => {
    setCommentModal(true);
  };
  const closeCommentModal = () => {
    setCommentModal(false);
  };

  const commentSubmitHandler = async (formData) => {
    const { fullName, message } = formData;
    const generateID = `${Math.random()
      .toString(36)
      .substr(2, 5)}-${Math.random().toString(36).substr(2, 5)}`;
    const commentVariables = {
      userName: fullName,
      content: message,
      strapiPostId: strapiId,
      publishedAt: new Date().toISOString(),
      commentId: generateID,
    };

    await createCommentHandler(commentVariables);
    if (!loadingMutation && !errorMutation) closeCommentModal();
    await refetch();
  };

  // Dynamic background img
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
          <p>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </p>
        </div>
        <Comments data={comments} openComModal={commentModalHandler} />
      </div>
      {commentModal && (
        <Modal
          type="comment"
          isOpen={commentModal}
          onClose={closeCommentModal}
          loading={{ loadingMutation, errorMutation }}
          onSubmit={commentSubmitHandler}
        />
      )}
    </div>
  );
};

export default Post;
