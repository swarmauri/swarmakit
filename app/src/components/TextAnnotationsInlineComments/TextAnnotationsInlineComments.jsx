import React from 'react';
import PropTypes from 'prop-types';
import './TextAnnotationsInlineComments.css';

const TextAnnotationsInlineComments = ({ text, annotations, className }) => {
  const renderAnnotatedText = () => {
    let output = [];
    let lastIndex = 0;

    annotations.forEach((annotation, index) => {
      const { start, end, comment } = annotation;
      output.push(
        <span key={`text-${index}`}>{text.slice(lastIndex, start)}</span>,
        <span key={`annotation-${index}`} className="annotation">
          {text.slice(start, end)}
          <span className="inline-comment">{comment}</span>
        </span>
      );
      lastIndex = end;
    });

    output.push(<span key="end-text">{text.slice(lastIndex)}</span>);
    return output;
  };

  return <div className={`text-annotations ${className}`}>{renderAnnotatedText()}</div>;
};

TextAnnotationsInlineComments.propTypes = {
  text: PropTypes.string.isRequired,
  annotations: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

TextAnnotationsInlineComments.defaultProps = {
  className: '',
};

export default TextAnnotationsInlineComments;