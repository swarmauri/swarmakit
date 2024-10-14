import React from 'react';
import PropTypes from 'prop-types';
import './ScrollableHorizontalNavigation.css';

const ScrollableHorizontalNavigation = ({ items }) => {
  return (
    <div className="scrollable-horizontal-navigation">
      <ul className="nav-items">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

ScrollableHorizontalNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ScrollableHorizontalNavigation;