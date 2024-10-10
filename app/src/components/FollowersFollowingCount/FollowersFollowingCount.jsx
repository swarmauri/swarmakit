/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import './FollowersFollowingCount.css';

const FollowersFollowingCount = ({ followers, following }) => {
  return (
    <div className="followers-following-count">
      <div className="followers-following-count__item">
        <span className="count">{followers}</span>
        <span className="label">Followers</span>
      </div>
      <div className="followers-following-count__item">
        <span className="count">{following}</span>
        <span className="label">Following</span>
      </div>
    </div>
  );
};

FollowersFollowingCount.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default FollowersFollowingCount;