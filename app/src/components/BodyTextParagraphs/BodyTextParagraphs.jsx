import React from 'react';
import PropTypes from 'prop-types';
import './BodyTextParagraphs.css';

const BodyTextParagraphs = ({ paragraphs, className }) => {
  return (
    <div className={`body-text-paragraphs ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

BodyTextParagraphs.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

BodyTextParagraphs.defaultProps = {
  className: '',
};

export default BodyTextParagraphs;