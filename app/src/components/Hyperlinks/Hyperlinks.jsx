import React from 'react';
import PropTypes from 'prop-types';
import './Hyperlinks.css';

const Hyperlinks = ({ links, className }) => {
  return (
    <div className={`hyperlinks-container ${className}`}>
      {links.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hyperlink">
          {link.text}
        </a>
      ))}
    </div>
  );
};

Hyperlinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

Hyperlinks.defaultProps = {
  className: '',
};

export default Hyperlinks;