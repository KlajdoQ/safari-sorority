
import React from "react";

function Search({searchAnimals, updateSearchAnimals}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Animals:</label>
      <input
        type="text"
        id="search"
        value = {searchAnimals}
        placeholder="Type name or type of animal..."
        onChange={(e) => updateSearchAnimals(e.target.value)}
      />
    </div>
  );
}
export default Search;
