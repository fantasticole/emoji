import React from 'react';

class EmojiList extends React.Component {
  selectEmoji = (char) => {
    navigator.clipboard.writeText(char);
    this.props.onSelect(char);
  }

  render() {
    return (
      <div className="list">
        {this.props.emoji.map(({character, slug, unicodeName}) => (
          <button title={unicodeName}
                  className="emoji"
                  key={slug}
                  onClick={() => this.selectEmoji(character)}>
            {character}
          </button>
        ))}
      </div>
    );

  }
}

export default EmojiList;