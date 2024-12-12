import React from 'react';

interface ThreadReadReceiptProps {
  status: 'seen' | 'unseen' | 'delivered' | 'failed';
}

const ThreadReadReceipt: React.FC<ThreadReadReceiptProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'seen':
        return '👁️';
      case 'unseen':
        return '📬';
      case 'delivered':
        return '✅';
      case 'failed':
        return '❌';
      default:
        return '📬';
    }
  };

  return (
    <div
      className={`thread-read-receipt ${status}`}
      role="img"
      aria-label={`Read Receipt ${status}`}
    >
      <span>{getStatusIcon()}</span>
    </div>
  );
};

export default ThreadReadReceipt;