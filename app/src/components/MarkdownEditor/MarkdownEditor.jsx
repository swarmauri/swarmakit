import React from 'react';
import PropTypes from 'prop-types';
import './MarkdownEditor.css';

const MarkdownEditor = ({ value, onChange, placeholder, className }) => {
  return (
    <textarea
      className={`markdown-editor ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Markdown Editor"
    />
  );
};

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

MarkdownEditor.defaultProps = {
  placeholder: 'Enter your markdown here...',
  className: '',
};

export default MarkdownEditor;