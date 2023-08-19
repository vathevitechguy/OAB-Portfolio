import React from 'react';
import './SearchInput.scss';

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearchInput;
