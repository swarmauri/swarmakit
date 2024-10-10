import React from 'react';
import PropTypes from 'prop-types';
import './TextHighlighting.css';

const TextHighlighting = ({ text, highlight, className }) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span className={`text-highlighting ${className}`}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

TextHighlighting.propTypes = {
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextHighlighting.defaultProps = {
  className: '',
};

export default TextHighlighting;