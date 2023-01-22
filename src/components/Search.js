
import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Search({searchAnimals, updateSearchAnimals}) {
 
  const clearInput = () => {
    updateSearchAnimals("")
  }
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
        
      <div className="searchIcon">
      {searchAnimals.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
      

      </div>
    </div>
  );
}

export default Search;
