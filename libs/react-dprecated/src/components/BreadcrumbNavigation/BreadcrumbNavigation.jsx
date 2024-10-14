import React from 'react';
import PropTypes from 'prop-types';
import './BreadcrumbNavigation.css';

const BreadcrumbNavigation = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-navigation">
      <ol className="breadcrumb-list">
        {crumbs.map((crumb, index) => (
          <li key={index} className={`breadcrumb-item ${index === crumbs.length - 1 ? 'active' : ''}`}>
            {index === crumbs.length - 1 ? (
              crumb.label
            ) : (
              <a href={crumb.href}>{crumb.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

BreadcrumbNavigation.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

BreadcrumbNavigation.defaultProps = {
  crumbs: [],
};

export default BreadcrumbNavigation;