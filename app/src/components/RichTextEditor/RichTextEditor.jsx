import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RichTextEditor.css';

const RichTextEditor = ({ initialValue, placeholder, className }) => {
  const [content, setContent] = useState(initialValue);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className={`rich-text-editor ${className}`}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder={placeholder}
        className="rich-text-editor__textarea"
      />
    </div>
  );
};

RichTextEditor.propTypes = {
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

RichTextEditor.defaultProps = {
  initialValue: '',
  placeholder: 'Start typing...',
  className: '',
};

export default RichTextEditor;