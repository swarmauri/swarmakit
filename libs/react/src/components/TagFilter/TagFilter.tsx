import React from 'react';
import './TagFilter.css';

interface TagFilterProps {
  tags: string[];
  activeTags: string[];
  onTagAdd: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, activeTags, onTagAdd, onTagRemove }) => {
  const handleTagClick = (tag: string) => {
    if (activeTags.includes(tag)) {
      onTagRemove(tag);
    } else {
      onTagAdd(tag);
    }
  };

  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag ${activeTags.includes(tag) ? 'active' : 'inactive'}`}
          onClick={() => handleTagClick(tag)}
          aria-pressed={activeTags.includes(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;