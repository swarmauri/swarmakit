import React from 'react';
import PropTypes from 'prop-types';
import './TextFormattingToolbar.css';

const TextFormattingToolbar = ({ onBold, onItalic, onUnderline, className }) => {
  return (
    <div className={`text-formatting-toolbar ${className}`}>
      <button onClick={onBold} className="toolbar-button" aria-label="Bold">
        <b>B</b>
      </button>
      <button onClick={onItalic} className="toolbar-button" aria-label="Italic">
        <i>I</i>
      </button>
      <button onClick={onUnderline} className="toolbar-button" aria-label="Underline">
        <u>U</u>
      </button>
    </div>
  );
};

TextFormattingToolbar.propTypes = {
  onBold: PropTypes.func.isRequired,
  onItalic: PropTypes.func.isRequired,
  onUnderline: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextFormattingToolbar.defaultProps = {
  className: '',
};

export default TextFormattingToolbar;