import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ text, links }) => {
  return (
    <footer className="footer">
      <p className="footer-text">{text}</p>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Footer.defaultProps = {
  text: 'Default Footer Text',
  links: [],
};

export default Footer;