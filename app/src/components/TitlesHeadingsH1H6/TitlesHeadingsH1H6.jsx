import React from 'react';
import PropTypes from 'prop-types';
import './TitlesHeadingsH1H6.css';

const TitlesHeadingsH1H6 = ({ level, text, color = 'black', align = 'left' }) => {
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className={`heading-level-${level}`} style={{ color, textAlign: align }}>
      {text}
    </HeadingTag>
  );
};

TitlesHeadingsH1H6.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default TitlesHeadingsH1H6;