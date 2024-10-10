import React from 'react';
import PropTypes from 'prop-types';
import './FilterChipsTags.css';

const FilterChipsTags = ({ tags, onRemove }) => {
  return (
    <div className="filter-chips-tags">
      {tags.map((tag, index) => (
        <div className="chip" key={index}>
          {tag}
          <button className="remove-button" onClick={() => onRemove(tag)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

FilterChipsTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FilterChipsTags;