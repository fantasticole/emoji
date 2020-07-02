import React from 'react';

function Search({onSearch}) {
    return (
      <div className="search">
        <input onChange={onSearch}></input>
      </div>
    );
}

export default Search;
