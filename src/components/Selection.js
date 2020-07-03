import React from 'react';

class Selection extends React.Component {
  copySelected = () => {
    const chars = this.props.selected.map(({character}) => character);
    const emojiString = chars.join("");
    navigator.clipboard.writeText(emojiString);
  }

  render() {
    return (
      <div className="selection">
        <button className="copy" onClick={this.copySelected}>copy</button>
        <div className="group">
          {this.props.selected.map(({character, slug, unicodeName}, i) => (
            <button title={`delete ${unicodeName} from selected group`}
                    className="emoji"
                    key={i}
                    onClick={() => this.props.removeEmoji(i)}>
              {character}
            </button>
          ))}
        </div>
        <button className="clear"
                title="clear all selected"
                onClick={this.props.clearGroup}>✕</button>
      </div>
    );

  }
}

export default Selection;