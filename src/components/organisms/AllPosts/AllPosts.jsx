import React from 'react';
import './AllPosts.scss';
import SearchInput from '../../atoms/Input/SearchInput';
import PostCard from '../../molecule/PostCard/PostCard';
import Productivity from '../../../assets/post/productivity.jpg';
import DataSci from '../../../assets/post/data.jpg';
import Chem from '../../../assets/post/chemical.jpg';
import DarkBtn from '../../atoms/Buttons/DarkBtn/DarkBtn';

const DUMMY_Data = [
  {
    id: Math.random(),
    tag: 'Growth',
    title:
      'Unlocking the Power of Deep Work: Strategies for Unprecedented Productivity',
    date: 'July 26, 2023.',
    imgSrc: Productivity,
  },
  {
    id: Math.random(),
    tag: 'Data Science',
    title:
      'Ethical Considerations in Data Science: Navigating the Complexities of Bias and Privacy',
    date: 'August 26, 2023.',
    imgSrc: DataSci,
  },
  {
    id: Math.random(),
    tag: 'Chemical Eng',
    title:
      'Ethical Considerations in Data Science: Navigating the Complexities of Bias and Privacy',
    date: 'October 17, 2023.',
    imgSrc: Chem,
  },
  {
    id: Math.random(),
    tag: 'Data Science',
    title:
      'Ethical Considerations in Data Science: Navigating the Complexities of Bias and Privacy',
    date: 'August 26, 2023.',
    imgSrc: DataSci,
  },
  {
    id: Math.random(),
    tag: 'Chemical Eng',
    title:
      'Ethical Considerations in Data Science: Navigating the Complexities of Bias and Privacy',
    date: 'October 17, 2023.',
    imgSrc: Chem,
  },
  {
    id: Math.random(),
    tag: 'Growth',
    title:
      'Unlocking the Power of Deep Work: Strategies for Unprecedented Productivity',
    date: 'July 26, 2023.',
    imgSrc: Productivity,
  },
];

const AllPosts = () => {
  const postData = DUMMY_Data.map((post) => {
    const { id, tag, title, date, imgSrc } = post;
    return (
      <PostCard
        key={id}
        id={id}
        tag={tag}
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
        <DarkBtn>Load More</DarkBtn>
      </div>
    </div>
  );
};

export default AllPosts;
