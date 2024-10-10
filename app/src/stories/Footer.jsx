import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = ({ year, companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} {companyName}. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  year: new Date().getFullYear(),
  companyName: 'Your Company Name',
};

export default Footer;
