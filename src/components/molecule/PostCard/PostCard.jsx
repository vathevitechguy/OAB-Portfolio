import React from 'react';
import './PostCard.scss';

const PostCard = (props) => {
  const { id, imgSrc, tag, title, date } = props;
  const colorGroup = () => {
    if (tag.startsWith('Growth')) return 'purple';
    else if (tag.startsWith('Data')) return 'green';
    else return 'red';
  };

  return (
    <div className="PostCard">
      <div className="img-item">
        <img src={imgSrc} />
      </div>
      <div className="PostCard_wrapper">
        <h5 className="tag">
          {tag}
          <span className={colorGroup()}>.</span>
        </h5>
        <h5 className="title">{title}</h5>
        <p>Posted: {date}</p>
      </div>
    </div>
  );
};

export default PostCard;
