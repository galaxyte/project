import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchInput}
      onChange={handleInputChange}
      placeholder="Search products..."
    />
  );
};

export default SearchBar;
