import React from 'react';

interface SkeletonLoadingProps {
  isLoading: boolean;
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ isLoading, children }) => {
  return (
    <div className={`skeleton-loading ${isLoading ? 'loading' : 'active'}`}>
      {isLoading ? <div className="skeleton-placeholder" /> : children}
    </div>
  );
};

export default SkeletonLoading;