import React from 'react';
import PropTypes from 'prop-types';
import './TextHighlighting.css';

const TextHighlighting = ({ text, highlight, className }) => {
  if (!highlight.trim()) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index} className="highlight">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

TextHighlighting.propTypes = {
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  className: PropTypes.string,
};

TextHighlighting.defaultProps = {
  highlight: '',
  className: '',
};

export default TextHighlighting;