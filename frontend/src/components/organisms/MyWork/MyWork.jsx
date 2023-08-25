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
          <img src={Publications} alt="Publications" />
          <h5>
            <a
              href="https://scholar.google.com/citations?user=gnYqDV8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publications
            </a>
          </h5>
          <p>Explore my academic publications and research.</p>
        </div>
        <div className="work">
          <img src={Blog} alt="Personal Blog" />

          <h5>
            <Link to="/personal-blog">Personal Blog</Link>
          </h5>
          <p>Read my thoughts and insights on various topics.</p>
        </div>
        <div className="work">
          <img src={Github} alt="Projects" />

          <h5>
            <a
              href="https://github.com/Dare-Badejo-001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
            </a>
          </h5>
          <p>Explore my coding projects on GitHub.</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
