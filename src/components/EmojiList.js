import React from 'react';

class EmojiList extends React.Component {
  selectEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji.character);
    this.props.onSelect([emoji]);
  }

  selectGroup = (emojiGroup) => {
    navigator.clipboard.writeText(emojiGroup);
    this.props.onSelect(emojiGroup.split(""));
  }

  render() {
    const {emoji, groups, search} = this.props;

    return (
      <div className="list">
        <div className="saved">
          {groups.map(({name, characters}, i) => (
            <button title={name}
                    className="group"
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