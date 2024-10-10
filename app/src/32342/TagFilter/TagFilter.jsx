import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TagFilter.css';

const TagFilter = ({ tags, onTagSelect }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleTagClick = (tag) => {
    toggleTag(tag);
    onTagSelect(tag);
  };

  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagSelect: PropTypes.func.isRequired,
};

export default TagFilter;