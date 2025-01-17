import React, { useState } from 'react';

interface UploadProps {
  status: 'uploading' | 'downloading' | 'completed' | 'paused' | 'failed';
  onAction?: () => void;
}

const Upload: React.FC<UploadProps> = ({ status, onAction }) => {
  const handleAction = () => {
    if (onAction) {
      onAction();
    }
  };

  return (
    <div className={`upload upload-${status}`} role="status" aria-live="polite">
      <span>{`Status: ${status.charAt(0).toUpperCase() + status.slice(1)}`}</span>
      <button onClick={handleAction} aria-label="Action">Action</button>
    </div>
  );
};

export default Upload;