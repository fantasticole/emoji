import React from 'react';

import './styles/index.css';

import EmojiList from './components/EmojiList';

import emoji from './utils/emoji';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <EmojiList emoji={emoji} />
      </div>
    );
  }
}

export default App;
