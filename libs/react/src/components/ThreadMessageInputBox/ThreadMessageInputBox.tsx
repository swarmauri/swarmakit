import React, { useState } from 'react';

interface ThreadMessageInputBoxProps {
  placeholder: string;
  onSend: (message: string) => void;
}

const ThreadMessageInputBox: React.FC<ThreadMessageInputBoxProps> = ({ placeholder, onSend }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <input
      type="text"
      className="message-input"
      placeholder={placeholder}
      value={message}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      aria-label="Type a message"
    />
  );
};

export default ThreadMessageInputBox;