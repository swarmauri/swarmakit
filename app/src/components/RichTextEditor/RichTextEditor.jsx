import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RichTextEditor.css';

const RichTextEditor = ({ content, onChange, readOnly }) => {
  const [editorContent, setEditorContent] = useState(content);

  const handleInputChange = (e) => {
    const newContent = e.target.innerHTML;
    setEditorContent(newContent);
    onChange(newContent);
  };

  return (
    <div
      className={`rich-text-editor ${readOnly ? 'read-only' : ''}`}
      contentEditable={!readOnly}
      suppressContentEditableWarning={true}
      onInput={handleInputChange}
      dangerouslySetInnerHTML={{ __html: editorContent }}
    />
  );
};

RichTextEditor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

RichTextEditor.defaultProps = {
  content: '',
  onChange: () => {},
  readOnly: false,
};

export default RichTextEditor;