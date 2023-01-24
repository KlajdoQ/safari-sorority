
import React from "react";

function Search({searchAnimals, updateSearchAnimals}) {
  return (
    <div className="searchbar">
      <label className="search"htmlFor="search">Search Animals:</label>
      <input
        type="text"
        className="input-text"
        value = {searchAnimals}
        placeholder="Type name or type of animal..."
        onChange={(e) => updateSearchAnimals(e.target.value)}
      />
    </div>
  );
}

export default Search;
