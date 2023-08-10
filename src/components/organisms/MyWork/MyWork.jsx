import React from 'react';
import './MyWork.scss';
import Publications from '../../../assets/publications.png';
import Blog from '../../../assets/blog.png';
import Github from '../../../assets/github.png';

const MyWork = () => {
  return (
    <div className="MyWork">
      <h4>My Work - 3Ps</h4>
      <div className="MyWork_wrapper">
        <div className="work">
          <img src={Publications} alt="" />
          <h5>Publications</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work">
          <img src={Blog} alt="" />
          <h5>Personal Blog</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work">
          <img src={Github} alt="" />
          <h5>Projects</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
