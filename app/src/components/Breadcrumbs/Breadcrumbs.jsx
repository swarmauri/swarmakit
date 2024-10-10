import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.css';

const Breadcrumbs = ({ items, activeIndex }) => {
  return (
    <nav className="breadcrumbs-nav">
      {items.map((item, index) => (
        <span
          key={item}
          className={`breadcrumb-item ${index === activeIndex ? 'active' : ''}`}
        >
          {item}
          {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
        </span>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number,
};

Breadcrumbs.defaultProps = {
  activeIndex: null,
};

export default Breadcrumbs;