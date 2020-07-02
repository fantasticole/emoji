import React from 'react';

function Search({onSearch}) {
    return (
      <div className="search">
        <input onChange={onSearch} placeholder="search for something..."></input>
      </div>
    );
}

export default Search;
