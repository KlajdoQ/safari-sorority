
import React from "react";

function Search({searchAnimals, updateSearchAnimals}) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type = "text"/>
        <div className = "searchIcon"></div>
      </div>
      <div className="dataResult"> </div>
    </div>
  );
}
export default Search;
