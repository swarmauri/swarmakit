import React from 'react';
import PropTypes from 'prop-types';
import './Blockquotes.css';

const Blockquotes = ({ quote, author, className }) => {
  return (
    <blockquote className={`blockquote ${className}`}>
      <p>{quote}</p>
      {author && <footer>- {author}</footer>}
    </blockquote>
  );
};

Blockquotes.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  className: PropTypes.string,
};

Blockquotes.defaultProps = {
  author: '',
  className: '',
};

export default Blockquotes;