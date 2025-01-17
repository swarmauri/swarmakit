import React from 'react';

interface ValidationMessagesProps {
  type: 'success' | 'error' | 'warning';
  message: string;
}

const ValidationMessages: React.FC<ValidationMessagesProps> = ({ type, message }) => {
  return (
    <div className={`validation-message ${type}`} role="alert" aria-live="assertive">
      {message}
    </div>
  );
};

export default ValidationMessages;