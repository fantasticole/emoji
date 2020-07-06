import React from 'react';

import './styles/index.css';

import EmojiList from './components/EmojiList';
import Search from './components/Search';
import Selection from './components/Selection';

import {EMOJI_API_KEY} from './utils/key';
import {getGroups} from './utils/storage';
import emoji from './utils/emoji';

const stringifiedList = emoji.map(e => ({
    ...e,
    stringified: JSON.stringify(Object.values(e)).toLowerCase(),
  }));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allEmoji: [...stringifiedList],
      emojiList: [],
      error: "",
      groups: [],
      search: "",
      selected: [],
    };
  }

  componentDidMount() {
    // this.fetchAllEmoji();
    this.getSavedGroups();
  }

  fetchAllEmoji = () => {
    const listUrl = `https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`;

    fetch(listUrl)
      .then(res => res.json())
      .then(
        (emoji) => {
          const allEmoji = emoji.map(e => ({
            ...e,
            stringified: JSON.stringify(Object.values(e)).toLowerCase(),
          }));

          this.setState({allEmoji});
        },
        (error) => {
          this.setState({error});
        }
      );
  }

  resetList = () => {
    this.setState({search: "", emojiList: []});
  }

  getSavedGroups = () => {
    // TODO: trigger this regularly. when selected changes?
    const groups = getGroups();
    this.setState({ groups });
  }

  searchList = (e) => {
    const search = e.target.value.toLowerCase();
    const emojiList = this.state.allEmoji.filter(emojiObject => emojiObject.stringified.includes(search));

    this.setState({ search, emojiList });
    // const searchUrl = `https://emoji-api.com/emojis?search=${value}&access_key=${EMOJI_API_KEY}`;

    // fetch(searchUrl)
    //   .then(res => res.json())
    //   .then(
    //     (list) => {
    //       this.setState({
    //         search: value,
    //         emojiList: list ? list : [],
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         search: value,
    //         error,
    //       });
    //     }
    //   );
  }

  addToSelection = (emojiArr) => {
    this.setState(({selected}) => ({
      selected: [...selected, ...emojiArr],
    }));
  }

  removeFromSelection = (index) => {
    this.setState(({selected}) => {
      const newSelection = [...selected];

      newSelection.splice(index, 1);

      return { selected: newSelection };
    });
  }

  clearSelected = () => {
    this.setState({ selected: [] });
  }

  render() {
    const {allEmoji, emojiList, groups, search, selected} = this.state;
    const filteredEmoji = search.length ? emojiList : allEmoji;

    return (
      <div className="app">
        <h1>Emoji List</h1>
        <Search onSearch={this.searchList} onClear={this.resetList}/>
        <EmojiList search={search}
                   groups={groups}
                   emoji={filteredEmoji}
                   onSelect={this.addToSelection}/>
        <Selection selected={selected}
                   removeEmoji={this.removeFromSelection}
                   clearGroup={this.clearSelected}/>
      </div>
    );
  }
}

export default App;
