
import React from "react";

function Search({searchAnimals, updateSearchAnimals}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Animals:</label>
      <input
        type="text"
        id="search"
        value = {searchAnimals}
        placeholder="Type a name to search..."
        onChange={(e) => updateSearchAnimals(e.target.value)}
      />
    </div>
  );
}

export default Search;
