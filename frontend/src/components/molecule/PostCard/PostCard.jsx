import React from 'react';
import './PostCard.scss';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  const { id, imgSrc, tag, title, date } = props;
  const colorGroup = () => {
    if (tag.startsWith('Growth')) return 'purple';
    else if (tag.startsWith('Data')) return 'green';
    else return 'red';
  };

  return (
    <div className="PostCard">
      <Link to={`${id}`}>
        <div className="img-item">
          <img src={`http://localhost:1337${imgSrc}`} alt={title} />
        </div>
        <h5 className="tag">
          {tag}
          <span className={colorGroup()}>.</span>
        </h5>
        <h5 className="title">{title}</h5>
        <p>Published: {date}</p>
      </Link>
    </div>
  );
};

export default PostCard;
