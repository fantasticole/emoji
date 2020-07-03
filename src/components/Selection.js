import React from 'react';

import copyBlack from '../assets/noun_copy.svg';
import copyWhite from '../assets/noun_copy_white.svg';
import saveBlack from '../assets/noun_save.svg';
import saveWhite from '../assets/noun_save_white.svg';

import {saveGroup} from '../utils/storage';

import Modal from './Modal';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();

    this.state = {
      saving: false,
      emojiString: "",
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
    this.setState({saving: true, emojiString});
  }

  saveName = () => {
    const name = this.nameRef.current.value;
    const {emojiString} = this.state;
    saveGroup(name, emojiString);
    this.closeModal();
  }

  closeModal = () => {
    this.setState({saving: false});
  }

  render() {
    const {saving, emojiString} = this.state;
    const {selected} = this.props;

    return (
      <div className="selection">
        <button className="copy"
                title="copy all selected"
                disabled={!selected.length}
                onClick={this.copySelected}>
          <img className="black" alt="" src={copyBlack}/>
          <img className="white" alt="" src={copyWhite}/>
        </button>
        <button className="save"
                title="save selected group"
                disabled={!selected.length}
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
                disabled={!selected.length}
                onClick={this.props.clearGroup}>✕</button>
        {saving && (
          <Modal handleClose={this.closeModal} title="Save Selection">
            <p className="selectedEmoji">{emojiString}</p>
            <input className="name"
                   placeholder="name your selection"
                   ref={this.nameRef} />
            <button className="submit" onClick={this.saveName}>save</button>
          </Modal>
        )}
      </div>
    );

  }
}

export default Selection;