import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.scss';
import ArrowPointingLeft from '../assets/icons/arrow-pointing-left.svg';
import DarePass from '../assets/DarePass.png';
import Comments from '../components/organisms/Comments/Comments';

const Post = (props) => {
  const { postID } = useParams();
  return (
    <div className="Post">
      <div className="Post_wrapper">
        <Link className="go-back" to={null}>
          <img src={ArrowPointingLeft} alt="go-back" />
          <p>Go Back</p>
        </Link>
        <div className="Post_header">
          <h2>{props.title}</h2>
          <div className="publisher-info">
            <div className="name">
              <img src={DarePass} alt="Oluwadare Badejo" />
              <p>Oluwadare Badejo</p>
            </div>
            <p className="date">Posted on {props.date}</p>
          </div>
        </div>
        <div className="Post_content">
          <p>{props.content}</p>
        </div>
        <Comments />
      </div>
    </div>
  );
};

export default Post;
