import React from 'react';
import PropTypes from 'prop-types';
import './ActivityFeedItem.css';

const ActivityFeedItem = ({ avatarUrl, username, activity, timestamp }) => {
  return (
    <div className="activity-feed-item">
      <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />
      <div className="activity-content">
        <span className="username">{username}</span>
        <span className="activity">{activity}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

ActivityFeedItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default ActivityFeedItem;