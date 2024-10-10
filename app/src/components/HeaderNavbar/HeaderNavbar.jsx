import React from 'react';
import PropTypes from 'prop-types';
import './HeaderNavbar.css';

const HeaderNavbar = ({ links, logo, onLinkClick }) => {
  return (
    <nav className="header-navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index} onClick={() => onLinkClick(link)}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

HeaderNavbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
};

HeaderNavbar.defaultProps = {
  onLinkClick: () => {},
};

export default HeaderNavbar;