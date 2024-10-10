import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  font-family: Arial, sans-serif;
  ${(props) => props.readOnly && 'background-color: #f5f5f5;'}
`;

const RichTextEditor = ({ defaultValue, readOnly }) => {
  const [content, setContent] = useState(defaultValue);

  return (
    <EditorWrapper>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        readOnly={readOnly}
      />
    </EditorWrapper>
  );
};

RichTextEditor.propTypes = {
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
};

RichTextEditor.defaultProps = {
  defaultValue: '',
  readOnly: false,
};

export default RichTextEditor;