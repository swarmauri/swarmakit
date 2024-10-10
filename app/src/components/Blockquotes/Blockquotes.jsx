import React from 'react';
import PropTypes from 'prop-types';
import './Blockquotes.css';

const Blockquotes = ({ text, author, className }) => {
  return (
    <blockquote className={`blockquote ${className}`}>
      <p className="blockquote-text">{text}</p>
      {author && <footer className="blockquote-footer">- {author}</footer>}
    </blockquote>
  );
};

Blockquotes.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  className: PropTypes.string,
};

Blockquotes.defaultProps = {
  author: '',
  className: '',
};

export default Blockquotes;