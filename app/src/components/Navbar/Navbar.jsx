// Navbar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = ({ logo, links, ctaButton }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
      {ctaButton && (
        <div className="navbar-cta">
          <a href={ctaButton.url} className="cta-button">{ctaButton.label}</a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  ctaButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  ctaButton: null,
};

export default Navbar;
