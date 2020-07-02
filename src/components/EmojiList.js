import React from 'react';

class EmojiList extends React.Component {
  copyEmoji = (char) => {
    navigator.clipboard.writeText(char);
  }

  render() {
    return (
      <div className="list">
        {this.props.emoji.map(({character, slug, unicodeName}) => (
          <button
            title={unicodeName}
            className="emoji"
            key={slug}
            onClick={() => this.copyEmoji(character)}
          >
            {character}
          </button>
        ))}
      </div>
    );

  }
}

export default EmojiList;