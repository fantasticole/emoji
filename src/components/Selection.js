import React from 'react';

class Selection extends React.Component {
  render() {
    return (
      <div className="selection">
        {this.props.selected.map(({character, slug, unicodeName}, i) => (
          <button title={`delete ${unicodeName} from selected group`}
                  className="emoji"
                  key={slug}
                  onClick={() => this.props.removeEmoji(i)}>
            {character}
          </button>
        ))}
      </div>
    );

  }
}

export default Selection;