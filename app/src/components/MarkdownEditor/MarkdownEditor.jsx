import React from 'react';
import PropTypes from 'prop-types';
import './MarkdownEditor.css';

const MarkdownEditor = ({ content, onChange }) => {
  return (
    <div className="markdown-editor">
      <textarea
        className="editor-textarea"
        value={content}
        onChange={onChange}
        placeholder="Write your markdown here..."
      />
    </div>
  );
};

MarkdownEditor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;