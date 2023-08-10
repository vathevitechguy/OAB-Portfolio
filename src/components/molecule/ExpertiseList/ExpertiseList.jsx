import React, { useState } from 'react';
import './ExpertiseList.scss';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import arrowUp from '../../../assets/icons/arrow-up.svg';

const ExpertiseList = (props) => {
  const { id, number, title, content } = props;
  const [dropdown, setDropdown] = useState(null);
  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <div key={id} className="ExpertiseList">
      <div className="ExpertiseList_heading">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <img
          src={dropdown ? arrowUp : arrowDown}
          alt="dropdown"
          onClick={toggleDropdown}
        />
      </div>
      {dropdown && (
        <div className="ExpertiseList_content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default ExpertiseList;
