import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery); 
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products by category"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default Search;
