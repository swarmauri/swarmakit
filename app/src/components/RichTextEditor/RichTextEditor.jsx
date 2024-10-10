import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RichTextEditor.css';

const RichTextEditor = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event) => {
    const newValue = event.target.innerHTML;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div
      className="rich-text-editor"
      contentEditable
      onInput={handleInputChange}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

RichTextEditor.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

RichTextEditor.defaultProps = {
  initialValue: '',
  onChange: () => {},
};

export default RichTextEditor;