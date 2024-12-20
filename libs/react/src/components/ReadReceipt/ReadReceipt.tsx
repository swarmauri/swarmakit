import React from 'react';

interface ReadReceiptProps {
  status: 'seen' | 'unseen' | 'delivered' | 'failed';
}

const ReadReceipt: React.FC<ReadReceiptProps> = ({ status }) => {
  return (
    <div className={`read-receipt ${status}`} role="status" aria-label={`Message status: ${status}`}>
      <span className={`status-icon ${status}`} />
    </div>
  );
};

export default ReadReceipt;