import React from 'react';
import PropTypes from 'prop-types';
import './BodyTextParagraphs.css';

const BodyTextParagraphs = ({ text, color, fontSize }) => {
  return (
    <p className="body-text-paragraph" style={{ color, fontSize }}>
      {text}
    </p>
  );
};

BodyTextParagraphs.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

BodyTextParagraphs.defaultProps = {
  color: '#333',
  fontSize: '16px',
};

export default BodyTextParagraphs;