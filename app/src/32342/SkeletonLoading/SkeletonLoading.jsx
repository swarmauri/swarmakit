import React from 'react';
import PropTypes from 'prop-types';
import './SkeletonLoading.css';

const SkeletonLoading = ({ loading }) => {
  return (
    <div className={`skeleton-wrapper ${loading ? 'loading' : 'active'}`}>
      <div className="skeleton"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

SkeletonLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SkeletonLoading;