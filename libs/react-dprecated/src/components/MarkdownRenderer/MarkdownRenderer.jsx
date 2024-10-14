// MarkdownRenderer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ markdownText }) => {
  return (
    <div className="markdown-renderer">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.propTypes = {
  markdownText: PropTypes.string.isRequired,
};

export default MarkdownRenderer;