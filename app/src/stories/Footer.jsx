import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = ({ year, companyName, privacyPolicyUrl, termsOfServiceUrl, contactUrl }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} {companyName}. All rights reserved.</p>
        <div className="footer-links">
          <a href={privacyPolicyUrl}>Privacy Policy</a>
          <a href={termsOfServiceUrl}>Terms of Service</a>
          <a href={contactUrl}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  privacyPolicyUrl: PropTypes.string.isRequired,
  termsOfServiceUrl: PropTypes.string.isRequired,
  contactUrl: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  year: new Date().getFullYear(),
  companyName: 'Your Company Name',
  privacyPolicyUrl: '#privacy',
  termsOfServiceUrl: '#terms',
  contactUrl: '#contact',
};

export default Footer;
