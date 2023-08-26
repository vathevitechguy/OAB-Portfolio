import React, { useState } from 'react';
import './AllPosts.scss';
import SearchInput from '../../atoms/Input/SearchInput';
import PostCard from '../../molecule/PostCard/PostCard';
import DarkBtn from '../../atoms/Buttons/DarkBtn/DarkBtn';
import LoadingSpinner from '../../molecule/LoadingSpinner/LoadingSpinner';

const AllPosts = (props) => {
  const { data } = props;
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const postData = filteredData.slice(0, visiblePosts).map((post) => {
    const { id, category, title, content, date, imgSrc } = post;
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

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts(visiblePosts + 3);
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <div className="AllPosts">
      <div className="AllPosts_wrapper">
        <div className="heading">
          <h4>All Post</h4>
          <SearchInput
            placeholder="Search for Post"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        {filteredData.length === 0 ? (
          <p className="error-message">No matching posts found.</p>
        ) : (
          <div className="postCards">{postData}</div>
        )}
        {visiblePosts < filteredData.length && (
          <div>
            {loadingMore && (
              <LoadingSpinner cS={{ height: 'auto', marginBottom: '80px' }} />
            )}
            {!loadingMore && (
              <DarkBtn
                type="button"
                title="Load More"
                onClick={loadMorePosts}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
