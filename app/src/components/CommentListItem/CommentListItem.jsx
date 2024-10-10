import React from 'react';
import PropTypes from 'prop-types';
import './CommentListItem.css';

const CommentListItem = ({ avatarUrl, username, commentText, timestamp }) => {
  return (
    <div className="comment-list-item">
      <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />
      <div className="comment-content">
        <span className="username">{username}</span>
        <span className="comment-text">{commentText}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

CommentListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default CommentListItem;