import React from 'react';

import './styles/index.css';

import EmojiList from './components/EmojiList';
import Search from './components/Search';

import {EMOJI_API_KEY} from './utils/key';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojiList: [],
      error: "",
    };
  }

  componentDidMount() {
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
        (emojiList) => {
          this.setState({emojiList});
        },
        (error) => {
          this.setState({error});
        }
      )
  }

  render() {
    return (
      <div className="app">
        <h1>Emoji List</h1>
        <Search onSearch={this.searchList}/>
        <EmojiList emoji={this.state.emojiList} />
      </div>
    );
  }
}

export default App;
