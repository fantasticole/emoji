import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clearSearch = () => {
  	this.inputRef.current.value = "";
    this.props.onClear();
  }

  render() {
    return (
      <div className="search">
        <input
	        onChange={this.props.onSearch}
	        placeholder="search for something..."
	        ref={this.inputRef}
        >
        </input>
        <button className="clear" onClick={this.clearSearch}>✕</button>
      </div>
    );
	}
}

export default Search;
