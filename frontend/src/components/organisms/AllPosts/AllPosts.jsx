import React from 'react';
import './AllPosts.scss';
import SearchInput from '../../atoms/Input/SearchInput';
import PostCard from '../../molecule/PostCard/PostCard';
import DarkBtn from '../../atoms/Buttons/DarkBtn/DarkBtn';

const AllPosts = (props) => {
  const { data } = props;
  const postData = data.map((post) => {
    const { id, category, title, date, imgSrc } = post;
    return (
      <PostCard
        key={id}
        id={id}
        tag={category}
        title={title}
        date={date}
        imgSrc={imgSrc}
      />
    );
  });
  return (
    <div className="AllPosts">
      <div className="AllPosts_wrapper">
        <div className="heading">
          <h4>All Post</h4>
          <SearchInput placeholder="Search" onChange={null} />
        </div>
        <div className="postCards">{postData}</div>
        {data.length >= 6 && <DarkBtn type="button" title="Load More" />}
      </div>
    </div>
  );
};

export default AllPosts;
