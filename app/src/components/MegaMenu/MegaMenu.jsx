import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MegaMenu.css';

const MegaMenu = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="mega-menu">
      <ul className="menu-categories">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`menu-category ${activeCategory === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {category.title}
            {activeCategory === index && (
              <div className="submenu">
                {category.submenu.map((item, subIndex) => (
                  <div key={subIndex} className="submenu-item">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

MegaMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      submenu: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default MegaMenu;