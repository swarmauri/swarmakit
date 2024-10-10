import React from 'react';
import PropTypes from 'prop-types';
import './FollowersFollowingCount.css';

const FollowersFollowingCount = ({ followers, following }) => {
  return (
    <div className="followers-following-count">
      <div className="count">
        <span className="count__number">{followers}</span>
        <span className="count__label">Followers</span>
      </div>
      <div className="count">
        <span className="count__number">{following}</span>
        <span className="count__label">Following</span>
      </div>
    </div>
  );
};

FollowersFollowingCount.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default FollowersFollowingCount;