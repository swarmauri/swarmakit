import React from 'react';
import PropTypes from 'prop-types';
import './TextAnnotationsInlineComments.css';

const TextAnnotationsInlineComments = ({ text, comments, className }) => {
  const renderTextWithComments = () => {
    const parts = text.split(' ');
    return parts.map((word, index) => {
      const comment = comments.find(c => c.word === word);
      return comment ? (
        <span key={index} className="commented-word">
          {word}
          <span className="comment-tooltip">{comment.comment}</span>
        </span>
      ) : (
        <span key={index}>{word} </span>
      );
    });
  };

  return <p className={className}>{renderTextWithComments()}</p>;
};

TextAnnotationsInlineComments.propTypes = {
  text: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

TextAnnotationsInlineComments.defaultProps = {
  comments: [],
  className: '',
};

export default TextAnnotationsInlineComments;