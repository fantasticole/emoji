import React from 'react';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

class EmojiList extends React.Component {
  selectEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji.character);
    this.props.onSelect([emoji]);
  }

  selectGroup = (emojiGroup) => {
    navigator.clipboard.writeText(emojiGroup);
    const emojiArray = splitter.splitGraphemes(emojiGroup).map(
      char => (
        this.props.allEmoji.find(({character}) => character === char)
        )
      );
    this.props.onSelect(emojiArray);
  }

  render() {
    const {emoji, groups, search} = this.props;

    return (
      <div className="list">
        <div className="saved">
          {groups.map(({name, characters}, i) => (
            <button title={name}
                    className="emoji group"
                    key={`${name}${i}`}
                    onClick={() => this.selectGroup(characters)}>
              {characters}
            </button>
          ))}
        </div>
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