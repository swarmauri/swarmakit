import React from 'react';
import PropTypes from 'prop-types';
import './Hyperlinks.css';

const Hyperlinks = ({ links, className }) => {
  return (
    <ul className={`hyperlinks-list ${className}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

Hyperlinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

Hyperlinks.defaultProps = {
  className: '',
};

export default Hyperlinks;