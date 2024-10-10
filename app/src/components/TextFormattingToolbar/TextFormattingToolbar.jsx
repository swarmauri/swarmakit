import React from 'react';
import PropTypes from 'prop-types';
import './TextFormattingToolbar.css';

const TextFormattingToolbar = ({ onBold, onItalic, onUnderline }) => {
  return (
    <div className="text-formatting-toolbar">
      <button onClick={onBold} className="toolbar-button">
        Bold
      </button>
      <button onClick={onItalic} className="toolbar-button">
        Italic
      </button>
      <button onClick={onUnderline} className="toolbar-button">
        Underline
      </button>
    </div>
  );
};

TextFormattingToolbar.propTypes = {
  onBold: PropTypes.func.isRequired,
  onItalic: PropTypes.func.isRequired,
  onUnderline: PropTypes.func.isRequired,
};

export default TextFormattingToolbar;