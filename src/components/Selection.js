import React from 'react';

import copyBlack from '../assets/noun_copy.svg'
import copyWhite from '../assets/noun_copy_white.svg'
import saveBlack from '../assets/noun_save.svg'
import saveWhite from '../assets/noun_save_white.svg'

import Modal from './Modal';

class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false,
    };
  }

  copySelected = () => {
    const chars = this.props.selected.map(({character}) => character);
    const emojiString = chars.join("");
    navigator.clipboard.writeText(emojiString);
  }

  saveSelected = () => {
    const chars = this.props.selected.map(({character}) => character);
    const emojiString = chars.join("");
    console.log({emojiString});
    this.setState({saving: true});
  }

  closeModal = () => {
    this.setState({saving: false});
  }

  render() {
    const {saving} = this.state;

    return (
      <div className="selection">
        <button className="copy"
                title="copy all selected"
                onClick={this.copySelected}>
          <img className="black" alt="" src={copyBlack}/>
          <img className="white" alt="" src={copyWhite}/>
        </button>
        <button className="save"
                title="save selected group"
                onClick={this.saveSelected}>
          <img className="black" alt="" src={saveBlack}/>
          <img className="white" alt="" src={saveWhite}/>
        </button>
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
        {saving && (
          <Modal handleClose={this.closeModal}>
            <p>Modal</p>
          </Modal>
        )}
      </div>
    );

  }
}

export default Selection;