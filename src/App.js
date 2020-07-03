import React from 'react';

import './styles/index.css';

import EmojiList from './components/EmojiList';
import Search from './components/Search';
import Selection from './components/Selection';

import {EMOJI_API_KEY} from './utils/key';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojiList: [],
      error: "",
      search: "",
      selected: [],
    };
  }

  componentDidMount() {
    this.fetchAllEmoji();
  }

  fetchAllEmoji = () => {
    const listUrl = `https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`;

    fetch(listUrl)
      .then(res => res.json())
      .then(
        (emojiList) => {
          this.setState({emojiList});
        },
        (error) => {
          this.setState({error});
        }
      )
  }

  searchList = (e) => {
    const {value} = e.target;
    const searchUrl = `https://emoji-api.com/emojis?search=${value}&access_key=${EMOJI_API_KEY}`;

    fetch(searchUrl)
      .then(res => res.json())
      .then(
        (list) => {
          this.setState({
            search: value,
            emojiList: list ? list : [],
          });
        },
        (error) => {
          this.setState({
            search: value,
            error,
          });
        }
      )
  }

  addToSelection = (emoji) => {
    this.setState(({selected}) => ({
      selected: [...selected, emoji],
    }));
  }

  removeFromSelection = (index) => {
    this.setState(({selected}) => {
      const newSelection = [...selected];

      newSelection.splice(index, 1);

      return { selected: newSelection };
    });
  }

  clearSelected = (emoji) => {
    this.setState({ selected: [] });
  }

  render() {
    const {emojiList, search, selected} = this.state;

    return (
      <div className="app">
        <h1>Emoji List</h1>
        <Search onSearch={this.searchList} onClear={this.fetchAllEmoji}/>
        <EmojiList search={search}
                   emoji={emojiList}
                   onSelect={this.addToSelection}/>
        <Selection selected={selected}
                   removeEmoji={this.removeFromSelection}
                   clearGroup={this.clearSelected}/>
      </div>
    );
  }
}

export default App;
