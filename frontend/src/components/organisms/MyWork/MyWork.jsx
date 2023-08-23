import React from 'react';
import './MyWork.scss';
import Publications from '../../../assets/publications.png';
import Blog from '../../../assets/blog.png';
import Github from '../../../assets/github.png';
import { Link } from 'react-router-dom';

const MyWork = () => {
  return (
    <div className="MyWork" id="work-cat">
      <h4>My Work - 3Ps</h4>
      <div className="MyWork_wrapper">
        <div className="work">
          <img src={Publications} alt="" />
          <h5>
            <Link
              target="_blank"
              to="https://scholar.google.com/citations?user=gnYqDV8AAAAJ&hl=en"
            >
              Publications
            </Link>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work">
          <img src={Blog} alt="" />

          <h5>
            {' '}
            <Link to="/personal-blog">Personal Blog</Link>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work">
          <img src={Github} alt="" />

          <h5>
            <Link to="https://github.com/Dare-Badejo-001">Projects</Link>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
