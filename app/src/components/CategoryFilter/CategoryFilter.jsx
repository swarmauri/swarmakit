import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    const newSelectedCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newSelectedCategory);
    onCategorySelect(newSelectedCategory);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <div
          key={category}
          className={`category ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategoryFilter;