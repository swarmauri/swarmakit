import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BreadcrumbWithDropdowns.css';

const BreadcrumbWithDropdowns = ({ items }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <nav className="breadcrumb-nav">
      {items.map((item, index) => (
        <div key={item.label} className="breadcrumb-item">
          <span onClick={() => item.subItems && toggleDropdown(index)}>
            {item.label}
          </span>
          {item.subItems && openDropdownIndex === index && (
            <ul className="dropdown-menu">
              {item.subItems.map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </ul>
          )}
          {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
        </div>
      ))}
    </nav>
  );
};

BreadcrumbWithDropdowns.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default BreadcrumbWithDropdowns;