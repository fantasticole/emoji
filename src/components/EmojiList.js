import React from 'react';

class EmojiList extends React.Component {
  selectEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji.character);
    this.props.onSelect(emoji);
  }

  render() {
    const {emoji, search} = this.props;

    return (
      <div className="list">
        {emoji.map((e) => (
          <button title={e.unicodeName}
                  className="emoji"
                  key={e.slug}
                  onClick={() => this.selectEmoji(e)}>
            {e.character}
          </button>
        ))}
        {!emoji.length && <p>No results for "{search}"</p>}
      </div>
    );

  }
}

export default EmojiList;