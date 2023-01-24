import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label className="search"htmlFor="search">Search Animals</label> <br/>
      <input
        type="text"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
        className="input-text"
      />
    </div>
  );
}

export default Search;
