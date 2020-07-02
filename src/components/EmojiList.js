import React from 'react';

class EmojiList extends React.Component {
  selectEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji.character);
    this.props.onSelect(emoji);
  }

  render() {
    return (
      <div className="list">
        {this.props.emoji.map((e) => (
          <button title={e.unicodeName}
                  className="emoji"
                  key={e.slug}
                  onClick={() => this.selectEmoji(e)}>
            {e.character}
          </button>
        ))}
      </div>
    );

  }
}

export default EmojiList;